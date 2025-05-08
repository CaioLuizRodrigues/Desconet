import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const conexoes = [
    { id: 1, nome: 'Ana', online: true, img: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: 2, nome: 'Bruna', online: false, img: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, nome: 'Carla', online: false, img: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: 4, nome: 'Duda', online: true, img: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: 5, nome: 'Eva', online: true, img: 'https://randomuser.me/api/portraits/women/5.jpg' },
  ];

  return (
    <ScrollView className="flex-1 bg-white">

      {/* TOPO AZUL COM CABEÇALHO */}
      <View className="bg-blue-500 rounded-b-3xl px-4 pt-12 pb-6">
        {/* Linha com ícone de menu e campo de busca */}
        <View className="flex-row items-center">
          <TouchableOpacity>
            <Feather name="menu" size={24} color="white" />
          </TouchableOpacity>

          <TextInput
            placeholder="Busque novas conexões ou comunidades"
            placeholderTextColor="#ccc"
            className="bg-white rounded-full px-4 py-2 flex-1 ml-4 text-sm"
          />
        </View>

        {/* Saudação */}
        <Text className="text-white text-right mt-2 text-base font-semibold">
          Olá, <Text className="text-white font-bold">Luizinho</Text>
        </Text>
      </View>

      {/* CONTEÚDO PRINCIPAL */}
      <View className="px-4 mt-6">

        {/* Conexões */}
        <Text className="text-xl font-semibold mb-2">Conexões</Text>
        <View className="flex-row gap-3">
          {conexoes.map((pessoa) => (
            <View key={pessoa.id} className="relative">
              <Image
                source={{ uri: pessoa.img }}
                className="w-14 h-14 rounded-full border-2 border-blue-400"
              />
              <View
                className={`absolute top-0 right-0 w-4 h-4 rounded-full ${
                  pessoa.online ? 'bg-green-500' : 'bg-red-500'
                } border border-white`}
              />
            </View>
          ))}
        </View>

        {/* Dicas do dia */}
        <Text className="text-xl font-semibold mt-8 mb-2">Dicas do dia</Text>
        {['Faça um passeio com seu pet', 'Leia um capítulo do seu livro', 'Faça uma corrida matinal'].map((dica, i) => (
          <TouchableOpacity key={i} className="bg-blue-500 rounded-xl py-3 px-4 my-1">
            <Text className="text-white text-sm">{dica}</Text>
          </TouchableOpacity>
        ))}

        {/* Tempo offline */}
        <TouchableOpacity className="bg-gray-100 rounded-xl py-4 px-4 mt-6">
          <Text className="text-black font-bold mb-1">Acompanhe seu tempo offline</Text>
          <Text className="text-blue-600 font-bold">10 horas</Text>
        </TouchableOpacity>

        {/* Botões inferiores */}
        <View className="flex-row justify-center items-center gap-6 mt-10 mb-10">
          <TouchableOpacity className="bg-blue-500 p-4 rounded-full">
            <FontAwesome name="users" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-500 p-4 rounded-full">
            <Text className="text-white text-xl">+</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-500 p-4 rounded-full">
            <FontAwesome name="comment" size={24} color="white" />
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
