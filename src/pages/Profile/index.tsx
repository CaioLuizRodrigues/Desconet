import { View, Text, Image } from 'react-native';
import Constants  from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight 

export default function Profile() {
 return (
   <View style={{ marginTop: statusBarHeight, flex: 1}} className='relative'>
        <View className='w-full '>
            <Image source={require('../../assets/img/Wallpaper.png')} className='w-full h-full'></Image>
        </View>
        <View style={{ borderTopLeftRadius: "20%" }}className='bg-white w-full h-full absolute top-32'>
            <View style={{ borderTopLeftRadius: "40%" }} className='w-full fle-row  flex-row justify-between items-center gap-3 rounded-tl-sm ms-7 pe-10'>
               <View style={{ borderTopLeftRadius: "40%" }}className='w-3/5 h-48 flex-row  '>
                    <Image source={require('../../assets/img/Profile.png')} className='size-32 rounded-full mt-6 mb-6 ms-3'></Image>
                <View className='w-1/2 h-4/6 mt-6 ms-3 flex-col justify-between'>
                   <View>     
                        <Text className='font-bold text-xl'>Luizinho</Text>
                        <Text className='text-sm'>@alberth-luiz</Text>
                    </View>
                    <View>
                        <Text className='text-sm font-bold'>Desempenho atual</Text>
                    </View>    
                </View>    
               </View>    
            </View>
            <View className='m-6 w-full'>
                <Text>lista</Text>
            </View>
        </View>
   </View>
  );
}