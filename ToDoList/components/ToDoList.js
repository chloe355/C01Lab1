import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
  const [toDos, settoDos] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value })));


  //remove
  const removeToDo = (id) => {
    settoDos(toDos.filter(toDo => toDo.id !== id));
  };
  
  //setContacts(contacts.filter(item => item.id !== id))


  const addTask = (newTitle) => {
    // const newTitle = { id: uuidv4(), title: newTitle };
    settoDos((prevtoDo) => [...prevtoDo, { id: uuidv4(), title: newTitle}]);
  };


  return (
    <View style={styles.todoListContainer}>
      {toDos.map((toDo) => (
        <View key={toDo.id} style={styles.todoItem}>
          <Text> {toDo.title}</Text>
            {/* <Button title="Add Todo" onPress={() => addToDo(toDo.id)} /> */}
          <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
        </View>
      ))}
      <AddTask onAddTask={addTask} />
    </View>
  );
};

ToDoList.defaultProps = {
  initialValues: [],
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;