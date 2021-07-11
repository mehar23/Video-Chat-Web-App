 if (process.env.NODE_ENV !== 'production') 
  {
    require('dotenv').config()
  }
  
  // using all the installed dependencies....

  const express = require('express')
  const app = express()
  const bcrypt = require('bcrypt')
  const passport = require('passport')
  const flash = require('express-flash')
  const session = require('express-session')
  const methodOverride = require('method-override')
  const server = require('http').Server(app)
  const io = require('socket.io')(server)
  const { v4: uuidV4 } = require('uuid')
  const path = require('path')
  const { ExpressPeerServer } = require('peer');
  const peerServer = ExpressPeerServer(server, {
    debug: true
  });

  // defining the public folder as static
  app.use(express.static(require('path').resolve(path.join(__dirname ,"public"))));
  app.use('/peerjs', peerServer);
  
  const initializePassport = require('./configur')
 initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

 const users = [] 
 const Url = uuidV4()  //  defined for getting unique URL's 
  
  app.set('view-engine', 'ejs')

  app.use(express.urlencoded({ extended: false }))
  app.use(flash())

  app.use(session({
    secret: "hi",
    resave: false,
    saveUninitialized: false
  }))

  app.use(passport.initialize())
  app.use(passport.session())

  app.use(methodOverride('_method'))

  app.get('/', (req, res) => {
    res.render('front_page.ejs')
  })
  
  // if authenticated then profile page is loaded
  app.get('/profile', checkAuthenticated, (req, res) => {
    res.render('profile.ejs', { name: req.user.name , email: req.user.email})
  })
  
  app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
  })
  
   // if we are not authenticated we have to relogin with correct credentials.
  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }))
  
  app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
  })
  
  // it is important to store all the information to verify for authentication using login..
  app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })

      res.redirect('/profile')

    } catch {
      res.redirect('/register')
    }
  })
  
  app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/') // the home page of the website
  })

  // meeting ......  url = uuidv4
  app.post('/meeting', (req, res) => {
    const newUrl = "room" + "?" + "roomId" + "=" + `/${Url}`;
    res.redirect(newUrl);
  })
  
  app.get('/room', (req, res) => {
    // console.log(room);
    res.render('.ejs', { roomId: req.query.roomId})
  })

  io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
      socket.join(roomId)
      socket.broadcast.to(roomId).emit('user-connected', userId)  // users connected to the same call..
      console.log(1);
      // messages
      socket.on('message', (message) => {
        //send message to the same video call page (or room)
        console.log(1);
        io.to(roomId).emit('createMessage', message)
    }); 
  
      socket.on('disconnect', () => {
        socket.broadcast.to(roomId).emit('user-disconnected', userId)
      })
    })
  })
  
  // authentication check
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/profile')
    }
    next()
  }

  
  server.listen(process.env.PORT || 3000)  // for hosting as well local host .