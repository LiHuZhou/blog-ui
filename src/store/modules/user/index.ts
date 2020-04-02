import { Commit, ActionTree, MutationTree } from "vuex";
import * as types from "@/store/mutation-types";
import { userDialog } from "@/types/user";

export interface State {
  loginDialogBool: boolean;
  logonDialogBool: boolean;
}

const initState: State = {
  loginDialogBool: false,
  logonDialogBool: false
};

// getters

const getters = {};

//mutations

const mutations: MutationTree<State> = {


    
};
