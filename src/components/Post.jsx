import React from 'react'

const Post = () => {
  return (
    <>
      <div className="post_container">
        <div className="person">
          <div className="author">
            <div className="img">
              <img
                src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg"
                alt=""
              />
            </div>
            <div className='text'>
              <h>superman</h>
              <h>Belong form dc</h>
            </div>
          </div>
          <div className="dot"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, ex ea.
          Odit.
        </p>
        <div className="post_img">
          <img src="https://cdn.pixabay.com/photo/2025/08/08/11/48/kanha-tiger-reserve-9762568_1280.jpg"></img>
        </div>
        <div className="like_comment"></div>
      </div>
    </>
  );
}

export default Post
