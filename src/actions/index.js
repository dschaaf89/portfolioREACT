import * as c from './ActionTypes';
export const deleteProject = id => ({
  type: c.DELETE_PROJECT,
  id
});

export const addProject = (project) => {
  const { name, repo, liveLInk, id, description, languages } = project;
  return {
    type: c.ADD_Project,
    name: name,
    repo: repo,
    liveLInk: liveLInk,
    id: id,
    description:description,
    languages:languages
  }
}

export const toggleProjectForm = () => ({
  type: c.TOGGLE_PROJECT_FORM
});