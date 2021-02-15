import database from '@react-native-firebase/database';
import { DATABASE_NAME } from '../constant/FirebaseConst'
const reference = database().ref(`/${DATABASE_NAME}`);

export default reference;
// userDetails = reference.child(`${key.id}`).child("First_name").set(`${key.first_name}`);