import { View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import Home from './pages/home';
import Routes from './routes';


export default function App() {

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}


