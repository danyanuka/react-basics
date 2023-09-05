// const watcher = {
//   id: "w101",
//   fullname: "Puki Ba",
//   movies: ["Rambo", "Rocky"],
// };
export const watcherService = {
  add,
  removeWatcher,
  getById,
  getWatchers,
};

import { storageService } from "./async-storage.service";

const STORAGE_KEY = "watcherDB";

// Add Watcher
async function add(fullname, movies) {
  const watcher = {
    fullname: fullname,
    movies: movies,
  };
  try {
    return await storageService.post(STORAGE_KEY, watcher);
  } catch (error) {
    console.error("Sorry Couldnt add Watcher", error);
  }
}

// Get All Watchers
async function getWatchers() {
  try {
    const watchers = await storageService.query(STORAGE_KEY);

    return watchers;
  } catch (error) {
    console.error("Sorry Couldt Get Watchers", error);
  }
}

// Remove a Watcher By Id
async function removeWatcher(watcherId) {
  try {
    await storageService.remove(STORAGE_KEY, watcherId);
  } catch (error) {
    console.error(`Sorry, Watcher ${watcherId} Not Found`, error);
  }
}

async function getById(watcherId) {}
