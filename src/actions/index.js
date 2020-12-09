import * as c from './ActionType';
export const deleteProject = id => ({
  type: c.DELETE_PROJECT,
  id
});

export const addProject = (project) => {
  const { name, repo, liveLInk, id, description, languages } = project;
  return {
    type: c.ADD_PROJECT,
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
export const toggleSkillForm = () => ({
  type: c.TOGGLE_SKILL_FORM
});
export const toggleEducationForm = () => ({
  type: c.TOGGLE_EDUCATION_FORM
});
export const toggleJobForm = () => (
  {
  type: c.TOGGLE_JOB_FORM
});