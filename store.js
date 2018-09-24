export const configureStore = createStore(
    rootReducer,
    ...getMiddleware()
);

const getMiddleware = () => {
    const logger = createLogger({ collapsed: true });
    const middleware = [
        logger,
        thunk,
    ];

    return applyMiddleware(...middleware);
};
