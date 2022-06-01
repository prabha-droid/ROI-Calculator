import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, Image, TextInput, TouchableOpacity, SafeAreaView, FlatList, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'


const VisibleScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const [text, setText] = useState([
   "USE BALANCE", "$1000", "$100"
  ]);
  const [timeFrame, setTimeFrame] = useState(["1 Day","7 Days", "30 Days", "1 Year", "5 Years"])
  const [tier, setTier] = useState(["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"])
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: '3%' }}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 15, marginBottom: 8 }}>
            <Text style={{ fontSize: 25, fontWeight: '700', color: '#070602' }}>ROI Calculator</Text>
            <AntDesign name='close' size={30} color="#222" />
          </View>
          <View style={{ justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
            <Image source={require('../assets/icon-round.png')} style={{ resizeMode: 'contain', width: 12, height: 12 }} />
            <Text style={{ marginRight: 10, marginLeft: 6, fontSize: 16, fontWeight: '600', color: '#808080' }}>Cake</Text>
            <Switch
              trackColor={{ false: "#939393", true: "#F8C400" }}
              thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ transform: [{ scaleX: 1.1 }, { scaleY: 0.8 }] }}

            />
            <Text style={{ fontSize: 15, fontWeight: '600', marginLeft: 6, color: '#808080' }}>USD</Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <TextInput placeholder="2.10000 CAKE" placeholderTextColor={'#070602'} style={{ backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#ececec', borderRadius: 6, fontWeight: "700", textAlign: 'right', fontSize: 20 }}></TextInput>
          </View>
          <View style={{ flexDirection: 'row' }}>
                
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={text}
                renderItem={({ item }) => {
                  return (
                    <View style={{ backgroundColor: '#f8f8f8', paddingHorizontal: 12, borderRadius: 8, paddingVertical: 12, marginRight: 10 }}>
                      <Text style={{ color: '#000', fontWeight: "600" }}>{item}</Text>
                    </View>
                  );
                }}

              />
        
            <View>
              <Text style={{ color: '#A8A8A8', fontWeight: '600' }}>$20.82</Text>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: '#000', fontWeight: '600', fontSize: 15 }}>Timeframe</Text>
          </View>
          <View style={{ flexDirection: 'row',marginBottom:8 }}>
                     
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={timeFrame}
                renderItem={({ item }) => {
                  return (
                    <View style={{ backgroundColor: '#f8f8f8', paddingHorizontal: 20, borderRadius: 20, paddingVertical: 8, marginRight: 10 }}>
                      <Text style={{ color: '#000', fontWeight: "600" }}>{item}</Text>
                    </View>
                  );
                }}

              />
           
          </View>
          <View style={{ marginVertical: 10, flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={{ color: '#000', fontWeight: '600', fontSize: 15 }}>Enable Accelerated APY</Text>
            <Switch
              trackColor={{ false: "#939393", true: "#F8C400" }}
              thumbColor={isEnabled1 ? "#f4f3f4" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
              style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}

            />
          </View>
          <View>
            <Text style={{color:'#a3a3a3', fontWeight:'600', fontSize:15, marginBottom:10}}>Select Tier</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={tier}
                renderItem={({ item }) => {
                  return (
                    <View style={{ backgroundColor: '#f8f8f8', paddingHorizontal: 20, borderRadius: 20, paddingVertical: 8, marginRight: 10 }}>
                      <Text style={{ color: '#000', fontWeight: "600" }}>{item}</Text>
                    </View>
                  );
                }}

              />
          </View>
          <View>
            <Text style={{color:'#a3a3a3', fontWeight:'600', fontSize:15, marginBottom:10, marginTop:15, textAlign:'right'}} >ROI at Current Rates</Text>
            <TextInput placeholder="2.10000 CAKE" placeholderTextColor={'#070602'} style={{ backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#ececec', borderRadius: 6, fontWeight: "700", textAlign: 'right', fontSize: 20 }}></TextInput>
            <Text style={{color:'#a8a8a8', fontWeight:'600', fontSize:14, marginVertical:10, textAlign:'right'}} >~ 3CAKE + 10 DON</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:15}}>
           <View style={{width:'48%', backgroundColor:'#000', paddingVertical:15, paddingHorizontal:15, borderRadius:15}}>
             <Text style={{textAlign:'center', color:'#fff'}}>Apply</Text>
           </View>
           <View style={{width:'48%',  borderColor:'#666666', borderWidth:1, paddingVertical:15, paddingHorizontal:15,borderRadius:15}}>
             <Text style={{textAlign:'center'}}>Cancel</Text>
           </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default VisibleScreen;