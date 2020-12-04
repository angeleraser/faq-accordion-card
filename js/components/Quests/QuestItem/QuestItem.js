import { QuestsListHtml } from "../Quests.js";
export const onQuestClick = ({ target }) => {
  const btn = target.closest("li > button");
  if (btn) {
    btn.parentNode.classList.toggle("is-active");
  }
};

export const initializeQuestEventListener = () => {
  QuestsListHtml.addEventListener("click", onQuestClick);
};
