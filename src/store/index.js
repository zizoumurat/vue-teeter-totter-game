import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getMomentum(array, maxWidth) {
    var sumMomentum = 0;
    array.forEach((element) => {
        if (element.isLeftItem)
            sumMomentum += (element.weight * ((Math.floor(maxWidth / 2) - element.left))) / 100;
        else
            sumMomentum += (element.weight * (element.left - Math.floor(maxWidth / 2))) / 100;
    });
    return sumMomentum;
}
import { newShape } from '../helper'
export default new Vuex.Store({
    state: {
        bottom: 80,
        isPaused: true,
        leftShapes: [],
        rightShapes: [],
        activeShapes: [],
        pain: 0,
        maxWidth: 1000,
    },
    mutations: {
        resetAll(state) {
            state.bottom = 80;
            state.isPaused = true;
            state.leftShapes = [];
            state.rightShapes = [];
            state.activeShapes = [];
            state.pain = 0;
        },
        PauseToggle(state) {
            state.isPaused = !state.isPaused
        },
        addShapeToRight(state) {
            const addShape = newShape(0, false, state.maxWidth);
            state.rightShapes.push(addShape);
        },
        bottomAzalt(state) {
            while (state.bottom > 0)
                state.bottom--;
        },
        activeShapeMoveToLeft(state) {
            if (state.activeShapes.length > 0) {
                var addLeftShape = state.activeShapes.pop();
                addLeftShape.isNewItem = false;
                state.leftShapes.push(addLeftShape);
            }
        },
        addShapeToActive(state, getters) {
            state.activeShapes = [];
            var activeShape = newShape(80, true, state.maxWidth);
            state.activeShapes.push(activeShape);
        }
    },
    actions: {
        startNewGame({ commit }) {
            commit("resetAll");
            commit("addShapeToRight");
            commit("addShapeToActive");
        },
        addShapeToRight({ commit }) {
            commit("addShapeToRight");
        },
        activeShapeMoveToLeft({ commit }) {
            commit("activeShapeMoveToLeft");
        },
        addShapeToActive({ commit }) {
            commit("addShapeToActive");
        }

    },
    modules: {},
    getters: {
        getBottom(state) {
            return state.bottom;
        },
        leftSum(state) {
            return getMomentum(state.leftShapes, state.maxWidth)
        },
        rightSum(state) {
            return getMomentum(state.rightShapes, state.maxWidth)
        },
        pain(state, getters) {
            const { leftSum, rightSum } = getters;
            state.pain = (leftSum - rightSum) * -180 / 100;
            console.log(state.pain)
            if (Math.abs(state.pain) > 30)
                state.pain = 30 * (Math.abs(state.pain) / state.pain);
            return state.pain;
        },
        gameOverStatus(state) {
            return state.leftShapes.length == state.rightShapes.length && Math.abs(state.pain) == 30
        }
    }
})