import { createAction } from "@reduxjs/toolkit";

const typeAction = {
    ADD: 'add/price',
    DELETE: 'delete/price',
}

export const addAction = createAction(typeAction.ADD);

export const deleteAction = createAction(typeAction.DELETE);
