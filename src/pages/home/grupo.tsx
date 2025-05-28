import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const groups = [
  {
    id: '1',
    name: 'Grupo da família',
    description: 'Saída ao cinema',
    lastMessage: 'Vamos no shopping às 19h?',
    members: 5,
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    unread: 1,
  },
  {
    id: '2',
    name: 'Grupo da faculdade',
    description: 'Atividade em grupo',
    lastMessage: 'Enviei o PDF no e-mail!',
    members: 4,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    unread: 2,
  },
  {
    id: '3',
    name: 'Grupo de amigos',
    description: 'Passeio de skate',
    lastMessage: 'Partiu pista sábado?',
    members: 6,
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    unread: 1,
  },
  {
    id: '4',
    name: 'Grupo da academia',
    description: 'Treino da semana',
    lastMessage: 'Hoje é dia de perna! 🦵',
    members: 3,
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    unread: 2,
  },
  {
    id: '5',
    name: 'Grupo de leitura',
    description: 'Terminar Percy Jackson',
    lastMessage: 'Capítulo 8 foi muito bom!',
    members: 5,
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    unread: 1,
  },
];

export default function GroupScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.groupCard}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.groupName}>{item.name}</Text>
        <Text style={styles.groupDesc}>{item.description}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        <Text style={styles.memberCount}>{item.members} membros</Text>
      </View>
      <View style={styles.unreadBadge}>
        <Text style={styles.unreadText}>{item.unread}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <FontAwesome name="bars" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Grupos</Text>
      </View>

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 120 }}
      />

      <View style={styles.footerIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="users" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="comment" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3b82f6',
    paddingTop: 48,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
  },
  menuIcon: {
    alignSelf: 'flex-start',
    padding: 4,
  },
  groupCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f4f4f4',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    borderColor: '#3b82f6',
    borderWidth: 2,
  },
  groupName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  groupDesc: {
    color: '#555',
    fontSize: 13,
    marginBottom: 2,
  },
  lastMessage: {
    fontSize: 12,
    color: '#333',
    fontStyle: 'italic',
  },
  memberCount: {
    fontSize: 12,
    color: '#666',
  },
  unreadBadge: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  unreadText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footerIcons: {
    position: 'absolute',
    bottom: 20,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconButton: {
    backgroundColor: '#3b82f6',
    padding: 16,
    borderRadius: 999,
  },
});
