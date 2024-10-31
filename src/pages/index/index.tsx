import React, {Component, PropsWithChildren} from 'react'
import Taro from "@tarojs/taro";
import {View, Image} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import heardImg from '../../assets/2.jpg'
import GlobalBottom from '../../components/globalBottom'
import './index.scss'


/**
 * 主页
 */
export default () => {
  return (
    <View className="indexPage">
      <View className='at-article__h1 title'>MBTI 性格测试</View>
      <View className='at-article__h2 subtitle'>只需 5 分钟，就能非常准确的描述出你是谁以及你的性格特点</View>
      <AtButton type='primary' onClick={()=>{
        Taro.navigateTo({
          url: '/pages/answer/index',
        });
      }} className='enterBtn' circle
      >开始测试</AtButton>
      <Image src={heardImg as string} className='heardBg' />
      <GlobalBottom />
    </View>
  )
}
