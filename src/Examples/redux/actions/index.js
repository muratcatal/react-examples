// do not use math funcs in actions. make them as pure as they can be!
export const testAction = (name) => {
    return {
        type: "A_TEST_ACTION",
        username: name + " " + (Math.random() * (100 - 1) + 1)
    }
}