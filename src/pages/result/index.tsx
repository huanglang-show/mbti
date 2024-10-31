import React from 'react'
import {Image, View} from '@tarojs/components'
import {AtButton} from "taro-ui";
import Taro from "@tarojs/taro";
import './index.scss'
import GlobalBottom from "../../components/globalBottom";
import heardImg from "../../assets/2.jpg";
import {calculateScore, questionResults, questions} from "../../utils/bizUtils";


/**
 * 结果页 // 测试号 "appid": "wx68ff07f4fd83345f",
 */
export default () => {
  const answerList = Taro.getStorageSync("answerList");
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: '答案为空',
      icon: 'error',
      duration: 3000
    })
  }
  console.log(answerList);
  // 调用函数并打印结果
  const result = calculateScore(answerList);
  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h3 subTitle">{result.resultDesc}</View>
      <AtButton type='primary' onClick={returnIndex} className='returnBtn' circle>返回主页</AtButton>
      <Image src={heardImg as string} className='heardBg' />
      <GlobalBottom />
    </View>
  )

}
// 回到首页
function returnIndex()   {
  Taro.reLaunch({
    url: '/pages/index/index',
  });
}
