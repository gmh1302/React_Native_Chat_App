import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import config from '../firebase.json';

const app = initializeApp(config);

const auth = getAuth(app);

export const signin = async ({ email, password }) => {
    const { user } = signInWithEmailAndPassword(auth, email, password);
    return user;
}

const uploadImage = async uri => {
    if (uri.startsWith('https')) {
        return uri;
    }

    const blob = await new Promise(( resolve, reject ) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response)
        };
        xhr.onerror = function () {
            reject(new TypeError('Network request failed'))
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
    });

    // user정보 가져와서 user별 폴더에 저장
    const user = auth.currentUser;
    const storage = getStorage();
    // storage에 업로드 경로 생성
    const profileRef = ref(storage, `/profile/${user.uid}/photo.png`);
    // blob(사진파일)을 경로에 업로드한다
    await uploadBytes(profileRef, blob, {
        connectType: "image/png",
    });
    blob.close();

    // 업로드한 사진 주소 반환
    return await getDownloadURL(profileRef);
};

export const signup = async ({ name, email, password, photo }) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    // alert("user ::: ", user);
    const photoURL = await uploadImage(photo);
    alert("photoURL ::: ", photoURL);
    await updateProfile(auth.currentUser, { displayName: name, photoURL });
    // alert("aaa!!!");
    return user;
}