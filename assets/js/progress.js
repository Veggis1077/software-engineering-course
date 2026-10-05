// Progress tracking via localStorage
const STORAGE_KEY = 'se-course-progress';

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function setModuleProgress(moduleId, data) {
  const progress = getProgress();
  progress[moduleId] = { ...progress[moduleId], ...data, updatedAt: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getModuleProgress(moduleId) {
  return getProgress()[moduleId] || { completed: 0, total: 0, quizScore: null };
}

function markExerciseDone(moduleId, exerciseId) {
  const p = getModuleProgress(moduleId);
  const done = new Set(p.doneExercises || []);
  done.add(exerciseId);
  setModuleProgress(moduleId, { doneExercises: [...done] });
}

function saveQuizScore(moduleId, score, total) {
  setModuleProgress(moduleId, { quizScore: score, quizTotal: total });
}

// Update overall progress bar on the index page
function updateOverallProgress(moduleIds) {
  const fill = document.getElementById('progress-fill');
  const label = document.getElementById('progress-label');
  if (!fill || !moduleIds.length) return;

  const progress = getProgress();
  const done = moduleIds.filter(id => progress[id]?.finished).length;
  const pct = Math.round((done / moduleIds.length) * 100);

  fill.style.width = pct + '%';
  if (label) label.textContent = `Fremdrift: ${done} av ${moduleIds.length} moduler fullført (${pct}%)`;
}
