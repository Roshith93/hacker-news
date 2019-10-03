import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hackerNewsApi";

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  // storyId is the the state
  // setStory is the function
  // useState is the place where we define the state

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data));
  }, []);
  // [] when the component mount do this,
  // storiyIdUpdates true/false

  return <p>{JSON.stringify(storyIds)}</p>;
};

export default StoriesContainer