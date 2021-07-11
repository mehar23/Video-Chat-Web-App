const socket = io('/')
const videoGrid = document.getElementById('video-grid')  // video grid defined in css
const myPeer = new Peer(undefined, {
  host: '/',
  port: '443',  // port defined for peerjs.
  path: '/peerjs'
})

 console.log(ROOM_ID);
 // console.log(Url);

let myVideoStream;
const myVideo = document.createElement('video')
myVideo.muted = true;
const peers = {}
navigator.mediaDevices.getUserMedia({
  video: true,   // at the user's end
  audio: true
}).then(stream => {
  myVideoStream = stream;
  addVideoStream(myVideo, stream)
  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
  })

  socket.on('user-connected', userId => {
    // console.log(122);
    connectToNewUser(userId, stream)
  })

  // input value for the messages 
  let text = $("input");
  // when press enter send message
  $('html').keydown(function (e) {
    if (e.which == 13 && text.val().length !== 0) {
      console.log();
      socket.emit('message', text.val());
      text.val('')
    }
  });
  socket.on("createMessage", message => {
    $("ul").append(`<li class="message">${message}</li>`); // appending the messages in the msg box
    // scrolling down the message box 
    scrollToBottom()
  })
})

socket.on('user-disconnected', userId => {
  // console.log(1000);
  if (peers[userId]) 
  {
    peers[userId].close()
    // resize()
  }

})

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)   // add video stream function deals with adding the video elements in the front end
  })
  call.on('close', () => {
    video.remove()
    resize();
  })

  peers[userId] = call
}

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)   //  adding the video box in the css component in video - grid
  resize(video);   // resizing the video elements 
}

function resize()
{
  var totalVideoElements = 0;  // total video elements ...
  $('#video-grid').children('video').each(function () {
     totalVideoElements += 1;
     this.style.display = "none";   // initially removing the display of the videos
   });

   // console.log(totalVideoElements);
   var Width = 950 / totalVideoElements;   // defining the new width of the boxes
   Width = Math.max(430,Width);

   /* in general whenever we have users > 2 then we make sure that,
      that width does not reduce less than 430 px , so that there are 2 videos 
      in each row of the grid..
   */

   var number = Math.floor((totalVideoElements / 2));
   if(totalVideoElements % 2)
     number += 1;

    /* the height of the video elements is the total screen height,
        divided by the total number of the rows.
    */

   var Height = 600 / number;
   console.log(Height);

   $('#video-grid').children('video').each(function () {
    this.setAttribute("height",`${Height}`);  // now assigning the new height
    this.setAttribute("width",`${Width}`);  // now assigning the new width
  });  
  
  $('#video-grid').children('video').each(function () {
    this.style.display = "flex";
  });   
}


const scrollToBottom = () => {
  var d = $('.main__chat_window');
  d.scrollTop(d.prop("scrollHeight"));
}

const end =  () =>{
  console.log(hello);
}

const muteUnmute = () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();   // when mute button is clicked we set the button with the unmute functionality
  } else {
    setMuteButton();  // calling the mute button function
    myVideoStream.getAudioTracks()[0].enabled = true;
  }
}

const playStop = () => {
  console.log('object')
  let enabled = myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo()
  } else {
    setStopVideo()
    myVideoStream.getVideoTracks()[0].enabled = true;
  }
}

const setMuteButton = () => {
  const html = `
    <i class="fas fa-microphone"></i>
    <span>Mute</span>
  `
  document.querySelector('.main__mute_button').innerHTML = html; // assigning a different html to the button
}

const setUnmuteButton = () => {
  const html = `
    <i class="unmute fas fa-microphone-slash"></i>
    <span>Unmute</span>
  `
  document.querySelector('.main__mute_button').innerHTML = html;  // assigning a different html to the button
}

const setStopVideo = () => {
  const html = `
    <i class="fas fa-video"></i>
    <span>Stop Video</span>
  `
  document.querySelector('.main__video_button').innerHTML = html;  // assigning a different html to the button
}

const setPlayVideo = () => {
  const html = `
  <i class="stop fas fa-video-slash"></i>
    <span>Play Video</span>
  `
  document.querySelector('.main__video_button').innerHTML = html;  // assigning a different html to the button
}

const getLink = () => {
  const URL = window.location.href.slice(7);  // removing the first characters of the link that are not required
  const link = document.querySelector('a');
  // const button = document.querySelector('.main__link_button');
  link.textContent = URL;
  link.href = URL;

  document.getElementById("get_link").classList.toggle("show");
  console.log(3);
  console.log(URL);
}

const endCall = () =>{
  location.replace("/profile");   // going back to the profile page after ending the call
}


window.onclick = function(event) {
  if (event.target.matches('.copy')) {
    var dropdowns = document.getElementsByClassName("link");
    console.log(2);
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');    // if the items are printed on screen , then remove them
      }
    }
  }
}

function copyLink() {
  /* Get the text field */
  var $temp = $("<input>");
  var $url = $(location).attr('href');  

  $("body").append($temp);  
  $temp.val($url).select();
  document.execCommand("copy");  // the copy command to copy to the clipboard
  $temp.remove();
  $("p").text("URL copied!");
}
