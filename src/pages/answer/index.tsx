import React, {useEffect, useState} from 'react'
import {AtButton, AtRadio} from "taro-ui";
import Taro from "@tarojs/taro";
import {View} from '@tarojs/components'
import './index.scss'
import GlobalBottom from "../../components/globalBottom";
import {questions} from "../../utils/bizUtils";

/**
 * 答题页
 */
export default () => {

  // 题号
  const [current, setCurrent] = useState(1)
  const questionList = questions
  // const questionList = [  {
  //   title: "你更喜欢...",
  //   options: [
  //     {
  //       "key": "A",
  //       "value": "独处和思考",
  //       "result": "I"
  //     },
  //     {
  //       "key": "B",
  //       "value": "与他人互动和交流",
  //       "result": "E"
  //     }
  //   ]
  // },]
  // 当前问题
  const [currentQuestion, setCurrentQuestion] = useState(questionList[0])
  // 当前问题选项
  const radioOptions= currentQuestion.options.map((
    item) => {
      return {
          label: item.key+ " " + item.value,
          value: item.key,
        };
    });
  // 当前问题选择的结果
  const [currentAnswer,setCurrentAnswer] = useState<String>()

  // 答案列表
  var [answerList] = useState<String[]>([])

  // 题号变化时，改变当前渲染的问题,
  useEffect(() => {
    if (current <= questionList.length) {
      setCurrentQuestion(questionList[current - 1])
      setCurrentAnswer(answerList[current - 1])
    } else {
      setCurrent(questionList.length)
      setCurrentQuestion(questionList[questionList.length-1])
      setCurrentAnswer(answerList[questionList.length-1])
    }
    console.log(answerList)
  }, [current]);

  return (
    <View className="answerPage">
      <View className='at-article__h2'>
        {current},{currentQuestion.title}
      </View>
      <AtRadio
        className='radio'
        options={radioOptions}

        value={currentAnswer}
        onClick={(value)=> {
          // 选择后跳下一题
          setCurrent(current + 1);
          // 记录答案
          answerList[current - 1] = value;
        }
      }
      />
      {current < questionList.length && <AtButton type='primary' className='nextBtn' circle onClick={() => setCurrent(current + 1)}>下一题</AtButton>}
      {answerList.length >= questionList.length && <AtButton type='primary' className='resultBtn' circle onClick={()=>{
        // 本地存储选择答案
        Taro.setStorageSync('answerList', answerList)
        // 跳转结果页面
        Taro.navigateTo({
          url: '/pages/result/index',
        });
      }}
      >查看结果</AtButton>}
      {current > 1 && <AtButton type='primary' className='lastBtn' circle onClick={() => setCurrent(current-1)}>上一题</AtButton>}
      <GlobalBottom />
    </View>
  )

}
