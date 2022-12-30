import React,{useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button,
  TextInput,
  Alert,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginTop: -400,
      padding: 10,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      marginBottom:20
    },
    red: {
      color: 'red',
      backgroundColor: 'blue',
      fontSize: 35,
      textAlign: 'center',
      padding: 40,
    },
    blue: {
      color: 'blue',
      fontSize: 20,
      textAlign: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.red}>HOME</Text>

      <Text style={styles.blue}>CHOOSE YOUR COURSE:</Text>
      <Button onPress={()=>navigation.navigate('Java')} title="java" color="#841584" />
      <Button onPress={()=>navigation.navigate('Cplus')} title="c++" color="#9584" />
  
      <Button onPress={()=>navigation.navigate('Form')} title="details" color="#345584" />
      <Button onPress={()=>navigation.navigate('ViewForm')} title="View Form" color="#345584" />
    </View>
  );
};

const Javapage = ({navigation}) => {
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };

  return (
    <ScrollView>
      <Image
        source={{
          uri: 'https://png.pngitem.com/pimgs/s/174-1746632_java-logo-transparent-png-java-programming-language-logo.png',
        }}
        style={{
          width: 110,
          height: 40,
          marginTop: 30,
          marginBottom: 20,
          marginLeft: 120,
        }}
      />
      <Text
        style={{
          fontSize: 15,
          backgroundColor: 'ghostwhite ',
          textAlign: 'center',
          color: 'blue',
        }}>
        This JAVA tutorial contains hundreds of JAVA examples. About This Book
        This book teaches you all about the Java language and how to use it to
        create applets and applications. By the time you get through with this
        book, you’ll know enough about Java to do just about anything, inside an
        applet or out. Who Should Read This Book This book is intended for
        people with at least some basic programming background, which includes
        people with years of programming experience or people with only a small
        amount of experience. If you understand what variables, loops, and
        functions are, you’ll be just fine for this book. The sorts of people
        who might want to read this book include you, if we can learn in this
        link and You’re a real whiz at HTML, understand CGI programming (in
        perl, AppleScript, Visual Basic, or some other popular CGI language)
        pretty well, and want to move on to the next level in Web page design
        make the program easy and strongest way. You had some Basic or Pascal in
        school and you have a basic grasp of what programming is, but you’ve
        heard Java is easy to learn, really powerful, and very cool in the
        addressing way. You’ve programmed C and C++ for many years, you’ve heard
        this Java thing is becoming really popular and you’re wondering what all
        the fuss is all about java is most important. You’ve heard that Java is
        really good for Web-based applets, and you’re curious about how good it
        is for creating more general applications. What if you know programming,
        but you don’t know object-oriented programming? Fear not. This book
        assumes no background in object-oriented design. If you know
        object-oriented programming, in fact, the first couple of days will be
        easy for you. How This Book Is Structured This book is intended to be
        read and absorbed over the course of three weeks. During each week,
        you’ll read seven chapters that present concepts related to the Java
        language and the creation of applets and applications.
      </Text>
      <Button onPress={()=>navigation.navigate('Home')} title="home" color="#841584" />
    </ScrollView>
  );
};

const Cpluspage = ({navigation}) => {
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };
  return (
    <ScrollView>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrs-4Ziix1x8KZMgTVS-mv27BI-fDamSX8gTBAnZ0bRjWukUUAgWC-WI88xc0ykpPgHmc&usqp=CAU',
        }}
        style={{
          width: 110,
          height: 100,
          marginTop: 20,
          marginBottom: 10,
          marginLeft: 120,
        }}
      />
      <Text
        style={{
          fontSize: 15,
          backgroundColor: 'ghostwhite ',
          textAlign: 'center',
          color: 'blue',
        }}>
        The most important thing while learning C++ is to focus on concepts. The
        purpose of learning a programming language is to become a better
        programmer; that is, to become more effective at designing and
        implementing new systems and at maintaining old ones. C++ supports a
        variety of programming styles. You can write in the style of Fortran, C,
        Smalltalk, etc., in any language. Each style can achieve its aims
        effectively while maintaining runtime and space efficiency. Use of C++
        C++ is used by hundreds of thousands of programmers in essentially every
        application domain. C++ is being highly used to write device drivers and
        other software that rely on direct manipulation of hardware under
        real-time constraints. C++ is widely used for teaching and research
        because it is clean enough for successful teaching of basic concepts.
        Anyone who has used either an Apple Macintosh or a PC running Windows
        has indirectly used C++ because the primary user interfaces of these
        systems are written in C++. You really do not need to set up your own
        environment to start learning C++ programming language. Reason is very
        simple, we have already set up C++ Programming environment online, so
        that you can compile and execute all the available examples online at
        the same time when you are doing your theory work. This gives you
        confidence in what you are reading and to check the result with
        different options. Feel free to modify any example and execute it
        online. C++ supports a variety of programming styles. You can write in
        the style of Fortran, C, Smalltalk, etc., in any language. Each style
        can achieve its aims effectively while maintaining runtime and space
        efficiency. Use of C++
      </Text>
      <Button onPress={()=>navigation.navigate('Home')} title="home" color="#841584" />
    </ScrollView>
  );
};

const Formpage = ({navigation}) => {
  const [Form,setForm ] = useState({name:"",email:"",mobile:"",team:"",city:""})
  const formChange = (value,field) =>{
    let prev = {...Form}
    prev[field] = value;
    setForm(prev)
  }
  const handleSubmit = async() => {
    console.log(Form);
    const response = await fetch('http://192.168.9.6:3001/api/insert', {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
       
      },
     
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(Form) 
    });
    console.log(response.json());
  };

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={(text) =>formChange(text,"name")}
        value={Form.name}
        style={styles.Input}
        placeholder="Enter your name"
      />
      <TextInput
        onChangeText={(text) =>formChange(text,"mobile")}
        value={Form.mobile}
        style={styles.Input}
        placeholder="Enter Phone"
      />
      <TextInput
        onChangeText={(text) =>formChange(text,"email")}
        value={Form.email}
        style={styles.Input}
        placeholder="Enter Email"
      />
      <TextInput
        onChangeText={(text) =>formChange(text,"team")}
        value={Form.team}
        style={styles.Input}
        placeholder="My Team"
      />
      <TextInput
       onChangeText={(text) =>formChange(text,"city")}
        value={Form.city}
        style={styles.Input}
        placeholder="City"
      />
      <TouchableHighlight
        onPress={()=>{
          handleSubmit()
          Alert.alert('Form Submitted')
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableHighlight>
      <Button onPress={()=>navigation.navigate('Home')} title="home" color="#841584" />
    </SafeAreaView>
  );
};


const ListPage = ({navigation}) => {
  const [Form,setForm ] = useState([])
  const [selectedId, setSelectedId] = useState(null);
  const handleSubmits = async() => {
    fetch('http://192.168.9.6:3001/api/find')
    .then((response) => response.json())
    .then((data) => setForm(data.data));
  }
 useEffect(()=>{
  handleSubmits()
 },[])
 const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>Name  {item?.name}</Text>
    <Text style={[styles.title, textColor]}>email  {item?.email}</Text>
    <Text style={[styles.title, textColor]}>mobile  {item?.mobile}</Text>
    <Text style={[styles.title, textColor]}>my team  {item?.team}</Text>
    <Text style={[styles.title, textColor]}>city  {item?.city}</Text>
  </TouchableOpacity>
);
 const renderItem = ({ item }) => {
  const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  const color = item.id === selectedId ? 'white' : 'black';

  return (
<>
    <Item
      item={item}
      onPress={() => setSelectedId(item.id)}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
    />
    <View style={{marginBottom:21}} />
    </>
  );
};
  return (
    <SafeAreaView>
      <FlatList
        data={Form}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
       
      />
      <TouchableHighlight
       
        style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableHighlight>
      <Button onPress={()=>navigation.navigate('Home')} title="home" color="#841584" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Input: {
    marginTop: 35,
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'black',
    marginLeft: 70,
    padding: 2,
  },
  button: {
    backgroundColor: 'lightgreen',
    borderRadius: 15,
    marginTop: 25,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Java" component={Javapage} />
        <Stack.Screen name="Cplus" component={Cpluspage} />
        <Stack.Screen name="Form" component={Formpage} />
        <Stack.Screen name="ViewForm" component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;