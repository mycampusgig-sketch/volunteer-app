// firebase-init.js
// ไฟล์กลางสำหรับเชื่อมต่อ Firebase (Auth + Firestore) และ Supabase (Storage)
// ให้ทุกหน้า HTML เรียกใช้ไฟล์นี้ร่วมกัน แทนที่จะตั้งค่าซ้ำทุกหน้า
 
// ---------- Firebase ----------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  increment,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
 
// TODO: ค่าพวกนี้คัดลอกมาจาก Firebase Console > Project settings > Your apps
// (อันเดียวกับที่เห็นตอนขั้นตอนที่ 2 "ลงทะเบียนเว็บแอป")
const firebaseConfig = {
  apiKey: "AIzaSyA0jcSXg1xQaons-x7kFXxbSYnoHhw0NPU",
  authDomain: "project-26c48.firebaseapp.com",
  projectId: "project-26c48",
  storageBucket: "project-26c48.firebasestorage.app",
  messagingSenderId: "694178582464",
  appId: "1:694178582464:web:469361dfd429df57a4c225",
};
 
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
 
// ---------- Supabase (ใช้เฉพาะ Storage เก็บรูปหลักฐาน) ----------
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
 
const SUPABASE_URL = "https://dmfxaxyitjnbqualwecf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Jgl1AVAPtu0kECxhrHb3Rw_wUxY-XI9";
 
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
 
// ---------- Export ให้หน้าอื่นเรียกใช้ ----------
// หน้า HTML จะ import จากไฟล์นี้ด้วย:
//   import { auth, db, supabase, ... } from './firebase-init.js';
export {
  auth,
  db,
  supabase,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  increment,
};
 