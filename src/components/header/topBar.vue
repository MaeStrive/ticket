<template>
    <div class="top-bar" style="    box-shadow: 0 2px 16px 0 rgba(220,220,220,.5);">
        <el-row>
            <el-col :span="9">
                <left-bar />
            </el-col>
            <el-col :span="8">
                <search-bar />
            </el-col>
            <el-col :span="7">
                <m-nav />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import leftBar from '@/components/header/leftBar'
import searchBar from '@/components/header/searchBar'
import MNav from '@/components/header/nav'
export default {
  components: {
    leftBar,
    searchBar,
    MNav
  }
}
</script>
