<script setup>
import axios from 'axios';
import { get } from '@/net/index.js';
import Header from '@/components/Header/Header.vue'
import Footer from "@/components/Footer/Footer.vue";
import { ref } from 'vue';
import { ElTreeV2 } from 'element-plus';
import router from '../router';
const accessToken = 'fe4f213e53662ad177f17bfca6d20797';
var query = ref('');
var treeRef = ref(null);
var props = {
  value: 'id',
  label: 'label',
  children: 'children'
};
const data = [
  {
    id: 1,
    label: '北京市',
  },
  {
    id: 2,
    label: '上海市',
  },
  {
    id: 3,
    label: '天津市',
  },
  {
    id: 4,
    label: '重庆市',
  },
  {
    id: 5,
    label: '河北省',
  },
  {
    id: 6,
    label: '山西省',
  },
  {
    id: 7,
    label: '内蒙古自治区',
  },
  {
    id: 8,
    label: '江苏省',
  },
  {
    id: 9,
    label: '浙江省',
  },
  {
    id: 10,
    label: '安徽省',
  },
  {
    id: 11,
    label: '福建省',
  },
  {
    id: 12,
    label: '江西省',
  },
  {
    id: 13,
    label: '山东省',
  },
  {
    id: 14,
    label: '河南省',
  },
  {
    id: 15,
    label: '湖北省',
  },
  {
    id: 16,
    label: '湖南省',
  },
  {
    id: 17,
    label: '广东省',
  },
  {
    id: 18,
    label: '海南省',
  },
  {
    id: 19,
    label: '四川省',
  },
  {
    id: 20,
    label: '贵州省',
  },
  {
    id: 21,
    label: '云南省',
  },
  {
    id: 22,
    label: '陕西省',
  },
  {
    id: 23,
    label: '甘肃省',
  },
  {
    id: 24,
    label: '青海省',
  },
  {
    id: 25,
    label: '西藏自治区',
  },
  {
    id: 26,
    label: '新疆维吾尔自治区',
  },
  {
    id: 27,
    label: '宁夏回族自治区',
  },
  {
    id: 28,
    label: '广西壮族自治区',
  },
  {
    id: 29,
    label: '辽宁省',
  },
  {
    id: 30,
    label: '吉林省',
  },
  {
    id: 31,
    label: '黑龙江省',
  },
  {
    id: 32,
    label: '陕西省',
  },
]
var dataResources = ref([
  {
    name: '孟姜女传说',
    details: '申报地区或单位：山东省莒县  孟姜女传说的滥觞，源于齐国对莒国发动战争。齐庄公四年（前550），齐庄公派大将杞梁、华周带领士卒偷袭莒国，结果杞梁被莒兵俘获，并被杀死。战争结束，新婚后的杞梁妻孟姜女，思夫心切，决定前往莒国寻找丈夫。孟姜女一路啼哭，不顾疲累来到莒城，看到城墙上悬挂着丈夫的头颅时，不由得心如刀绞，泪如雨下。一声闷雷，山摇地动，悬挂杞梁头颅之处的城墙倒塌，连同孟姜女一并埋没。人们掘开坍塌土石，却不见孟姜女和杞梁的人头。人们说，他们阳间情未了，阴间续姻缘，又做夫妻去了。这便是莒地及周边地区广为流传的孟姜女传说。 孟姜女传说流布全国。与其他地方流传的孟姜女传说不同，作为故事发生地的莒地流传的孟姜女传说，其主要内容，不是围绕着秦长城和秦始皇与孟姜女之间展开的，而是围绕着齐长城和齐莒之战与孟姜女之间的纠葛展开的。在莒地的传说中，由于发动战争导致夫妻分离而产生的悲剧结果，是莒地传说的典型特色。至今莒县一带的老年妇女，在特定场合仍然以孟姜女传统曲调来抒发感情，这种哭调在农村广泛流传，形成了一种哭文化。',
    year: '2011(第三批)',
    location: '山东省莒县',
    type: '扩展项目'
  },
  {
    name: '梁祝传说',
    details: '申报地区或单位：浙江省上虞市  梁山伯与祝英台传说是我国四大民间传说之一，是中华文化的瑰宝。千百年来，它以提倡求知、崇尚爱情、歌颂生命生生不息的鲜明主题深深打动着人们的心灵，以曲折动人的情节、鲜明的人物性格、奇巧的故事结构而受到民众的广泛喜爱。梁祝传说和以梁祝传说为内容的其他艺术形式所展现的艺术魅力，使其成为中国民间文学艺术之林中的一朵奇葩。 梁祝传说自1600年前的晋代形成以来，主要流传于宁波、上虞、杭州、宜兴、济宁、汝南等地，并向中国的各个地区、各个民族流传辐射。在流传的过程中，各地人民又不断丰富发展传说的内容，甚至还兴建了众多以梁祝传说为主题的墓碑和庙宇等建筑。此外，梁祝传说还流传到朝鲜、越南、缅甸、日本、新加坡和印度尼西亚等国家，其影响之大在中国民间传说中实属罕见。 据梁祝传说改编的越剧《梁山伯与祝英台》、小提琴协奏曲《梁祝》、电影《梁山伯与祝英台》等各种文学艺术作品，以及由此而形成的求学、婚恋的独特风尚，构成了庞大的梁祝文化系统。 同其他口头文学和非物质文化遗产一样，近20年来，由于受现代化和城市化的影响，以口头传承为主的梁祝传说受到了前所未有的冲击。原有的口头传承人相继去世，年轻一代不愿接续，传承面临着断代的危险，急需抢救和采取相应的保护措施，使这一优秀的文化传统得以绵延。',
    year: '2006(第一批)',
    location: '浙江省上虞市',
    type: '新增项目'
  }
]);

var onQueryChanged = function (query) {
  treeRef.value.filter(query);
};
var filterMethod = function (query, node) {
  return node.label.includes(query);
};
var handleNodeClick = function (node) {
  const url = `/data/locate?location=${node.label}`;
  get(url, function (response) {
    dataResources.value = response;
  });
};

function onEnterPressed() {
  const url = `/data/name?name=${query.value}`;
  get(url, function (response) {
    dataResources.value = response;
  });
}

// Custom post function using axios
function customPost(url, data, success, failure = defaultFailure) {
  axios.post(url, data, { headers: { 'Content-Type': 'application/json' } })
    .then(success)
    .catch(failure);
}

// Default failure handler for requests
function defaultFailure(error) {
  console.error("Request failed:", error);
}

// Play audio from a provided URL
function playAudio(audioUrl) {
  const audio = new Audio(audioUrl);
  audio.play()
    .then(() => console.log("Audio is playing"))
    .catch((error) => console.error("Audio playback error:", error));
}
function sendTextToSpeech(text) {
  const requestData = {
    access_token: accessToken,
    type: "tts",
    brand: "gpt-sovits",
    name: "anime",
    method: "api",
    prarm: {
      speaker: "派蒙【原神】",
      emotion: "中立",
      text: text,
      text_language: "中文",
      text_split_method: "按标点符号切",
      fragment_interval: 0.3,
      batch_size: 1,
      batch_threshold: 0.75,
      parallel_infer: true,
      split_bucket: true,
      top_k: 10,
      top_p: 1.0,
      temperature: 1.0,
      speed_factor: 1.0,
    },
  };

  // Use the custom post function for the API call
  customPost(
    'proxy/tts',
    requestData,
    (response) => {
      if (response.data.data.audio) {
        console.log("Audio URL:", response.data.data.audio);
        playAudio(response.data.data.audio);
      } else {
        console.error("No audio URL received from the response.");
      }
    },
    (error) => {
      console.error("Error in text-to-speech request:", error);
    }
  );
}
const webPageRedirection = (name) => {
  router.push({ path: '/create', query: { name: name } });
};
</script>
<template>
  <div class="article-container">
    <!-- 页面导航条 -->
    <div>
      <Header></Header>
    </div>
    <!-- 页面内容 -->
    <div class="article-body">
      <!-- 左侧目录树 -->
      <div class="article-body-left">
        <el-input v-model="query" class="article-body-left-search" placeholder="请输入非遗关键词！"
          @keydown.enter="onEnterPressed" />
        <el-tree-v2 ref="treeRef" class="article-body-left-tree" :data="data" :props="props" :height="680"
          :expand-on-click-node="true" :highlight-current="true" :filter-method="filterMethod"
          @node-click="handleNodeClick" />
      </div>
      <!-- 右侧展示区 -->
      <div class="article-body-right">
        <el-scrollbar height="750px">
          <el-card v-for="(item, index) in dataResources" :key="index" class="scrollbar-demo-item">
            <template #header>
              <div class="card-header">
                <span>{{ item.name }}</span>
                <el-button type="primary" round @click="webPageRedirection(item.name)">点我去'二创'</el-button>
              </div>
            </template>
            <div class="card-content" @click="sendTextToSpeech(item.details)">{{ item.details }}</div>
            <template #footer>
              <div class="card-footer">{{ item.location }}</div>
              <div class="card-footer">{{ item.year }}</div>
              <div class="card-footer">{{ item.type }}</div>
            </template>
          </el-card>
        </el-scrollbar>
      </div>
    </div>
    <!-- 页脚 -->
    <div id="sticky-footer">
      <Footer style="background-color: #475669;"></Footer>
    </div>
  </div>
</template>
<style scoped>
.article-container {
  display: flex;
  flex-direction: column;
  background-color: #475669;
  height: 100vh;
  overflow: hidden;
}

.article-body {
  margin-top: 58px;
  height: calc(100vh - 58px);
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.article-body-left {
  width: 300px;
  margin-top: 15px;
  margin-left: 15px;
}

.article-body-left-search {
  margin-bottom: 15px;
  width: 100%;
}

.article-body-left-tree {
  height: 700px;
  overflow: hidden;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  font-family: 微软雅黑, serif;
  color: black;
  line-height: auto;
}

.article-body-right {
  margin-top: 15px;
  margin-left: 5px;
  border-radius: 4px;
  flex: 1;
  overflow: hidden;
}

.scrollbar-demo-item {
  margin: 15px;
  border-radius: 4px;
  color: var(--el-color-primary);
}

.card-header {
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 2px;
  color: #000;
}

.card-content {
  display: block;
  height: auto;
  width: auto;
  font-family: 微软雅黑, serif;
  font-size: 16.8px;
  line-height: 24px;
  letter-spacing: 2px;
  text-align: left;
  text-size-adjust: 100%;
  color: rgb(37, 122, 219);
}

.card-footer {
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #171616;
}

#sticky-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>