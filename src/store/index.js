import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getMomentum(array, sumCount) {
    var sumMomentum = 0;
    var yapilan = 0;
    array.forEach((element, index) => {
        if (index < sumCount) {
            if (element.isLeftItem)
                sumMomentum += element.weight * (50 - element.left);
            else
                sumMomentum += element.weight * (element.left - 50);
            yapilan++;
        }
    });
    console.log(array, sumMomentum, yapilan);
    return sumMomentum;
}
import { newShape } from '../helper'
export default new Vuex.Store({
    state: {
        isPaused: true,
        leftShapes: [],
        rightShapes: [],
        pain: 0
    },
    mutations: {
        PauseToggle(state) {
            state.isPaused = !state.isPaused
        },
        addShapeToRight(state) {
            const addShape = newShape(50, 100, 0, false);
            state.rightShapes.push(addShape);
        },
        addShapeToLeft(state) {
            var addShape = newShape(0, 50, 80, true);
            state.leftShapes.push(addShape);
        }
    },
    actions: {
        startNewGame({ commit }) {
            commit("addShapeToRight");
            commit("addShapeToLeft");
        }
    },
    modules: {},
    getters: {
        leftSum(state) {
            return getMomentum(state.leftShapes, state.leftShapes.length)
        },
        rightSum(state) {
            return getMomentum(state.rightShapes, state.leftShapes.length)
        },
        pain(state, getters) {
            const { leftSum, rightSum } = getters;
            if (leftSum == rightSum) return 0;
            state.pain = leftSum > rightSum ? (leftSum - rightSum) * -1 : (rightSum - leftSum)
            if (Math.abs(state.pain) > 60)
                state.pain = 30 * (Math.abs(state.pain) / state.pain);
            return state.pain;

        },
        gameOverStatus(state, getters) {
            const { leftSum, rightSum, pain } = getters;
            console.log(pain)
            return Math.abs(state.pain) == 30
        }
    }
})