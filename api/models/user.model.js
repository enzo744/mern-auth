import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://static.vecteezy.com/ti/vettori-gratis/t1/2534006-social-media-chat-online-immagine-profilo-vuoto-icona-testa-e-corpo-persone-in-piedi-icona-sfondo-grigio-gratuito-vettoriale.jpg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;

