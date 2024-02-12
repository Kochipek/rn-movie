import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      imageView: {
        width: "80%",
        height: "40%",
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
      },
      lineStyle: {
        flex: 1, 
        height: 1,
        backgroundColor: 'gray'
      },
      dividerContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      forgotPassword: {
        width: "80%",
      },
      forgotPasswordText: {
        color: 'gray',
        textAlign: 'right',
      },
      brandIcons: {
        flexDirection: 'row',
         alignItems: 'center', 
         marginTop: 20,
      },
      socialIcon: {
        marginHorizontal: 10,
      },
      textStyle: {
        fontSize: 27,
        fontWeight: '500',
        width: "80%",
      },
      accountLink: {
        flex : 1,
        color: 'gray',
        justifyContent: 'space-evenly',
       }
    }
);

