export default {
    namespaced: true,
    state: {
        isshowLoginModal: false
    },
    mutations: {
        changeIsshowLoginModel(state, payload) {
            state.isshowLoginModal = payload
        }
    }
}
//namespaced:true使其变成一个命名空间模块
//state给予一个布尔值，false表示不显示模态框
//mutations方法是唯一一种能改变state状态的方法。
//因为我们希望isshowLoginModal是动态的，
//随着我们的点击事件所改变，而不是一个静止的值，
//我们需要在mutations中设计函数chanIsshowLoginModal()，
//并令isshowLoginModal = payload。