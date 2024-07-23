<script setup>
import {ref} from 'vue'
import {useTransition} from '@vueuse/core'
import {ArrowRight, CaretBottom, CaretTop, Warning} from "@element-plus/icons-vue";

const source = ref(0)
const outputValue = useTransition(source, {
  duration: 1500,
})
source.value = 172000
</script>
<template>
  <div class="Data-container">
    <el-row :gutter="16">
      <el-col :span="8">
        <div class="statistic-card">
          <el-statistic :value="outputValue">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                Daily active users
                <el-tooltip effect="dark" content="Number of users who logged into the product in one day"
                            placement="top">
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning/>
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>than yesterday</span>
              <span class="green">
                24%
              <el-icon>
                <CaretTop/>
              </el-icon>
            </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="statistic-card">
          <el-statistic :value="693700">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                Monthly Active Users
                <el-tooltip effect="dark" content="Number of users who logged into the product in one month"
                            placement="top">
                  <el-icon style="margin-left: 4px" :size="12">
                    <Warning/>
                  </el-icon>
                </el-tooltip>
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>month on month</span>
              <span class="red">
              12%
              <el-icon>
                <CaretBottom/>
              </el-icon>
            </span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="statistic-card">
          <el-statistic :value="72000" title="New transactions today">
            <template #title>
              <div style="display: inline-flex; align-items: center">
                New transactions today
              </div>
            </template>
          </el-statistic>
          <div class="statistic-footer">
            <div class="footer-item">
              <span>than yesterday</span>
              <span class="green">
              16%
              <el-icon>
                <CaretTop/>
              </el-icon>
            </span>
            </div>
            <div class="footer-item">
              <el-icon :size="14">
                <ArrowRight/>
              </el-icon>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.Data-container {
  background-color: #151515;
  padding-top: 75px;
  padding-bottom: 75px;
  width: 1707.32px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 150px;
  border-radius: 10px;
  background-color: #151515;
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}

.red {
  color: var(--el-color-error);
}
</style>