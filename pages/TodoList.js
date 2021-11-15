// import React from 'react';
// import { View, Text, SafeAreaView, TextInput, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
// import { EventSchema, EVENT } from '../EventSchema';
// import moment from 'moment';

// const Realm = require('realm');

// let i = 0;
// export default class Tasks extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       eventID: 0,
//       eventName: '',
//       eventDesc: '',
//       eventNameError: false,
//       eventDescError: false,
//       events: [],
//       eventsList: null,
//       realm: null,
//       updateDataValue: false
//     };
//   }
//   componentWillUnmount() {
//     const { realm } = this.state;
//     if (realm !== null && !realm.isClosed) {
//       realm.close();
//     }
//   }

//   componentDidMount() {
//     Realm.open({ schema: [EventSchema], schemaVersion: 4 })
//       .then((res) => {
//         let a = [];
//         for (let events of res.objects(EVENT)) {
//           a.push(JSON.parse(JSON.stringify(events)));
//         }
//         this.setState({ realm: res, events: a }, () => {
//           if (i !== 0) {
//             i = parseInt(a.reverse()[0].key);
//           }
//         });
//       })
//       .catch(() => { });
//   }
//   saveData = () => {
//     const { realm } = this.state;
//     realm.write(() => {
//       realm.create(EVENT, this.state.eventsList);
//     });
//   };
//   onPressUpdate = (item) => {
//     this.setState({
//       eventID: parseInt(item.key),
//       eventName: item.eventName,
//       eventDesc: item.eventDesc,
//       updateDataValue: true
//     });
//   };
//   onPressDelete = (id) => {
//     Realm.open({ schema: [EventSchema], schemaVersion: 4 }).then((res) => {
//       res.write(() => {
//         res.delete(res.objectForPrimaryKey(EVENT, id));
//         let a = [];
//         for (let events of res.objects(EVENT)) {
//           a.push(JSON.parse(JSON.stringify(events)));
//         }
//         this.setState({ realm: res, events: a });
//       });
//     });
//   };
//   updateData = (id) => {
//     const { realm } = this.state;
//     let eventId = id - 1;
//     realm.write(() => {
//       var obj = realm.objects(EVENT);
//       obj[eventId].eventName = this.state.eventName;
//       obj[eventId].eventDesc = this.state.eventDesc;
//       obj[eventId].updateAt = moment().format();
//       Realm.open({ schema: [EventSchema], schemaVersion: 4 })
//         .then((res) => {
//           let a = [];
//           for (let events of res.objects(EVENT)) {
//             a.push(JSON.parse(JSON.stringify(events)));
//           }
//           this.setState({ realm: res, events: a, eventName: '', eventDesc: '' });
//         })
//         .catch(() => { });
//     });
//   };
//   onSubmit = () => {
//     let tempEvents = this.state.events;
//     i = i + 1;
//     tempEvents.push({
//       key: `${i}`,
//       eventName: this.state.eventName,
//       eventDesc: this.state.eventDesc,
//       createdAt: moment().format(),
//       updateAt: moment().format()
//     });
//     this.setState(
//       {
//         eventsList: {
//           key: `${i}`,
//           eventName: this.state.eventName,
//           eventDesc: this.state.eventDesc,
//           createdAt: moment().format(),
//           updateAt: moment().format()
//         },
//         eventDesc: '',
//         eventName: ''
//       },
//       () => {
//         this.saveData();
//       }
//     );
//   };
//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
//         <View style={{ backgroundColor: 'yellow', width: '100%', alignItems: 'center' }}>
//           <Text style={{ fontSize: 30, marginTop: 20 }}>React native Realm Demo</Text>
//         </View>
//         <View style={{ flex: 1, width: '90%', alignItems: 'center' }}>
//           <View style={[styles.inputText, { borderColor: this.state.eventNameError ? 'red' : 'black' }]}>
//             <TextInput
//               placeholder=""
//               value={this.state.eventName}
//               style={{ fontSize: 20 }}

//               onChangeText={(text) => {
//                 this.setState({
//                   eventName: text,
//                   eventNameError: false
//                 });
//               }}
//             />
//           </View>
//           <View style={[styles.inputText, { borderColor: this.state.eventDescError ? 'red' : 'black' }]}>
//             <TextInput
//               placeholder="Event Description"
//               value={this.state.eventDesc}
//               style={{ fontSize: 20 }}
//               onChangeText={(text) => {
//                 this.setState({
//                   eventDesc: text,
//                   eventDescError: false
//                 });
//               }}
//             />
//           </View>
//           <TouchableHighlight
//             style={[styles.inputText, { alignItems: 'center' }]}
//             underlayColor={'red'}
//             onPress={() => {
//               this.setState(
//                 {
//                   eventNameError: !this.state.eventName.length,
//                   eventDescError: !this.state.eventDesc.length
//                 },
//                 () => {
//                   if (!this.state.eventNameError && !this.state.eventDescError) {
//                     !this.state.updateDataValue ? this.onSubmit() : this.updateData(this.state.eventID);
//                   }
//                 }
//               );
//             }}
//           >
//             <Text style={{ fontSize: 20 }}>Submit</Text>
//           </TouchableHighlight>
//           <FlatList
//             style={{ width: '100%', marginTop: 20 }}
//             data={this.state.events}
//             renderItem={({ item }) => {
//               return (
//                 <View style={{ flex: 1, flexDirection: 'row' }} key={`${item.key}`}>
//                   <View style={{ flex: 0.7, margin: 10 }}>
//                     <Text style={{ fontSize: 20 }}>{`Event Name : ${item.eventName}`}</Text>
//                     <Text style={{ fontSize: 20 }}>{`Event Description : ${item.eventDesc}`}</Text>
//                     <Text style={{ fontSize: 20 }}>{`Create At: ${moment(item.createdAt).format('DD/MM/YYYY')}`}</Text>
//                   </View>
//                   <View style={{ flex: 0.3, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
//                     <Text
//                       style={{ fontSize: 20 }}
//                       onPress={() => {
//                         this.onPressUpdate(item);
//                       }}
//                     >
//                       Update
//                     </Text>
//                     <Text
//                       style={{ fontSize: 20 }}
//                       onPress={() => {
//                         this.onPressDelete(item.key);
//                       }}
//                     >
//                       Delete
//                     </Text>
//                   </View>
//                 </View>
//               );
//             }}
//             keyExtractor={(item) => {
//               return item.key;
//             }}
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   inputText: {
//     height: 46,
//     width: '100%',
//     justifyContent: 'center',
//     padding: 10,
//     borderRadius: 6,
//     borderWidth: 0.5,
//     marginTop: 20,

//   }
// });
import React, { useState } from 'react';
import {
  Alert,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  List,
  Title,
  IconButton,
  Text as PaperText,
  Button as PaperButton,
  TextInput as PaperTextInput,
} from 'react-native-paper';
import Parse from 'parse/react-native';

export const TodoList = () => {
  // State variables

  const [readResults, setReadResults] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  // Functions used by the screen components
  const createTodo = async function () {

    // This value comes from a state variable
    const newTodoTitleValue = newTodoTitle;
    // Creates a new Todo parse object instance

    let Todo = new Parse.Object('Todo');
    Todo.set('title', newTodoTitleValue);
    Todo.set('done', false);
    // After setting the todo values, save it on the server
    try {
      await Todo.save();
      // Success
      Alert.alert('Success!', 'Todo created!');
      // Refresh todos list to show the new one (you will create this function later)
      readTodos();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    }
  };

  const readTodos = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query('Todo');
    try {
      let todos = await parseQuery.find();
      // Be aware that empty or invalid queries return as an empty array
      // Set results to state variable
      setReadResults(todos);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    }
  };

  const updateTodo = async function (
    todoId: string,
    done: boolean,
  ) {
    // Create a new todo parse object instance and set todo id
    let Todo = new Parse.Object('Todo');
    Todo.set('objectId', todoId);
    // Set new done value and save Parse Object changes
    Todo.set('done', done);
    try {
      await Todo.save();
      // Success
      Alert.alert('Success!', 'Todo updated!');
      // Refresh todos list
      readTodos();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    }
  };

  const deleteTodo = async function (todoId) {
    // Create a new todo parse object instance and set todo id
    let Todo = new Parse.Object('Todo');
    Todo.set('objectId', todoId);
    // .destroy should be called to delete a parse object
    try {
      await Todo.destroy();
      Alert.alert('Success!', 'Todo deleted!');
      // Refresh todos list to remove this one
      readTodos();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
      return false;
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#208AEC" />
      <SafeAreaView style={Styles.container}>
        <View style={Styles.header}>
          <Image
            style={Styles.header_logo}
            source={{
              uri:
                'https://blog.back4app.com/wp-content/uploads/2019/05/back4app-white-logo-500px.png',
            }}
          />
          <PaperText style={Styles.header_text_bold}>
            {'React Native on Back4App'}
          </PaperText>
          <PaperText style={Styles.header_text}>{'Product Creation'}</PaperText>
        </View>
        <View style={Styles.wrapper}>
          <View style={Styles.flex_between}>
            <Title>Todo List</Title>
            {/* Todo read (refresh) button */}
            <IconButton
              icon="refresh"
              color={'#208AEC'}
              size={24}
              onPress={() => readTodos()}
            />
          </View>
          <View style={Styles.create_todo_container}>
            {/* Todo create text input */}
            <PaperTextInput
              value={newTodoTitle}
              onChangeText={text => setNewTodoTitle(text)}
              label="New Todo"
              mode="outlined"
              style={Styles.create_todo_input}
            />
            {/* Todo create button */}
            <PaperButton
              onPress={() => createTodo()}
              mode="contained"
              icon="plus"
              color={'#208AEC'}
              style={Styles.create_todo_button}>
              {'Add'}
            </PaperButton>
          </View>
          <ScrollView>
            {/* Todo read results list */}
            {readResults !== null &&
              readResults !== undefined &&
              readResults.map((todo) => (
                <List.Item
                  key={todo.id}
                  title={todo.get('title')}
                  titleStyle={
                    todo.get('done') === true
                      ? Styles.todo_text_done
                      : Styles.todo_text
                  }
                  style={Styles.todo_item}
                  right={props => (
                    <>
                      {/* Todo update button */}
                      {todo.get('done') !== true && (
                        <TouchableOpacity
                          onPress={() => updateTodo(todo.id, true)}>
                          <List.Icon
                            {...props}
                            icon="check"
                            color={'#4CAF50'}
                          />
                        </TouchableOpacity>
                      )}
                      {/* Todo delete button */}
                      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                        <List.Icon {...props} icon="close" color={'#ef5350'} />
                      </TouchableOpacity>
                    </>
                  )}
                />
              ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

// These define the screen component styles
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  wrapper: {
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: '#208AEC',
  },
  header_logo: {
    width: 170,
    height: 40,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  header_text_bold: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  header_text: {
    marginTop: 3,
    color: '#fff',
    fontSize: 14,
  },
  flex_between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  create_todo_container: {
    flexDirection: 'row',
  },
  create_todo_input: {
    flex: 1,
    height: 38,
    marginBottom: 16,
    backgroundColor: '#FFF',
    fontSize: 14,
  },
  create_todo_button: {
    marginTop: 6,
    marginLeft: 15,
    height: 40,
  },
  todo_item: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.12)',
  },
  todo_text: {
    fontSize: 15,
  },
  todo_text_done: {
    color: 'rgba(0, 0, 0, 0.3)',
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
});