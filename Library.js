function istouching(fRect){
    if (movingRect.x - fRect.x < fRect.width/2 + movingRect.width/2
      && fRect.x - movingRect.x < fRect.width/2 + movingRect.width/2
      && movingRect.y - fRect.y < fRect.height/2 + movingRect.height/2
      && fRect.y - movingRect.y < fRect.height/2 + movingRect.height/2) {
  
  return true;
  
  }
  else {
  
    return false;
  }
  }