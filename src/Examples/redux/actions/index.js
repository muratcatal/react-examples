export const testAction = (name) => {
    console.log(name);
    return {
        type: "A_TEST_ACTION",
        username: name
    }
}