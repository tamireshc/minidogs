import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import PhotoContent from "./PhotoContent";
import PhotoLoadMore from "./PhotoLoadMore";

const Photos = () => {
  const { list } = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);
  return (
    <section>
      {list && <PhotoContent />}
      <PhotoLoadMore />
    </section>
  );
};

export default Photos;
