import { StackNavigator,DrawerNavigator } from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import PrincipalScreen from '../Containers/PrincipalScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

const DrawerStack = DrawerNavigator({
  Principal: { screen: PrincipalScreen },
  Demo: { screen: LaunchScreen },
},{
  drawerPosition: 'left',
  drawerOpenRoute: 'abrirMenu',
  drawerCloseRoute: 'fecharMenu',
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  PrincipalScreen: { screen: DrawerStack },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'PrincipalScreen',
  navigationOptions: {
    headerStyle: styles.header,
    title: 'Título',
    headerTintColor: 'white'
  }
})


export default PrimaryNav
