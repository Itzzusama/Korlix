import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const ChatScreen = ({navigation}) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const scrollViewRef = useRef(null);

  const sendMessage = () => {
    if (message) {
      const userMessage = {text: message, sender: 'user'};
      const botMessage = {text: getBotReply(message), sender: 'bot'};

      setChat([...chat, userMessage, botMessage]);
      setMessage('');
    }
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  }, [chat]);

  const getBotReply = message => {
    // Simulating a chatbot's reply based on the user's message
    // You can customize this function to implement your desired chatbot logic
    console.log(message);
    if (
      message.toLowerCase().includes('hello') ||
      message.toLowerCase().includes('hi')
    ) {
      return 'Hello there! How can I assist you?';
    } else if (
      message.toLowerCase().includes('bye') ||
      message.toLowerCase().includes('thanks')
    ) {
      return 'Goodbye! Have a great day!';
    } else {
      return 'I am a chatbot. Sorry, I cannot understand your message.';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
          <Image
            source={require('../../icons/back.png')}
            style={styles.leftImage}
          />
        </TouchableOpacity>
        <View style={styles.rightImagesContainer}>
          <Image
            source={require('../../icons/volume-mute.png')}
            style={styles.rightImage}
          />
          <Image
            source={require('../../icons/share.png')}
            style={styles.rightImage}
          />
        </View>
      </View>
      <View style={styles.horizontalLine} />

      <ScrollView
        style={{margin: 10}}
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}>
        {chat.map((item, index) => (
          <View
            key={index}
            style={[
              styles.chatBubble,
              item.sender === 'user' ? styles.userBubble : styles.botBubble,
            ]}>
            <View
              style={[
                styles.edge,
                item.sender === 'user' ? styles.userEdge : styles.botEdge,
              ]}
            />
            <Text style={styles.chatText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor={'black'}
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles remain the same...

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  leftImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  rightImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightImage: {
    width: 22,
    height: 22,
    marginRight: 5,
    borderRadius: 15,
    marginLeft: 10,
  },
  chatContainer: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'flex-end',
  },

  chatBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
    position: 'relative',
    overflow: 'visible',
    borderWidth: 1,
    borderColor: 'lightgray',
    alignSelf: 'flex-start', // Adjust alignment for user bubble
    flexDirection: 'row', // Add flexDirection for outer container
  },
  userBubble: {
    backgroundColor: '#DCF8C5',
    marginLeft: 'auto', // Push the bubble to the right
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
  },
  chatText: {
    fontSize: 16,
    color: 'black',
  },
  edge: {
    // position: 'absolute',
    // bottom: -6,
    // width: 15,
    // height: 15,
    // backgroundColor: 'white',
    // transform: [{rotate: '90deg'}],
    // zIndex: 1, // Add this to position the edge above the bubble

    // position: 'absolute',
    // bottom: -8,
    // right: -8,
    // width: 15,
    // height: 15,
    // backgroundColor: 'white',
    // transform: [{rotate: '45deg'}],
    // zIndex: 1, // Add this to position the edge above the bubble
    // borderWidth: 1,
    // borderColor: 'lightgray',
  },
  userEdge: {
    right: -8,
  },
  botEdge: {
    left: -8,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginTop: 10,
    borderBottomColor: 'black',
    // backgroundColor:"red"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    // backgroundColor:'skyblue'
  },
  input: {
    color: 'black',
    flex: 1,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  sendButton: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#25D366',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
