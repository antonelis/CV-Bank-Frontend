<template>
  <div class="container mx-auto">
    <div class="form-container mx-auto">
      <h1>Ladda upp Cv</h1>
      <h6>Här kan du ladda upp ditt Cv till ITHS Cv-databas.</h6>
      <form>
        <div class="form-group mt-5">
          <label for="exampleFormControlFile1">Ladda upp Cv</label>
          <input
            class="form-control-file mt-3"
            type="file"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
          />
          <button v-on:click="submitFile()" class="btn-color mt-5">
            Ladda upp
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaddaCv",

  // data() {
  //   return {
  //     file: "",
  //   };
  // },

  // methods: {
  //   submitFile() {
  //     let formData = new formData();
  //     formData.append("file", this.file);

  //     axios
  //       .post("/uploadFile", formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       })
  //       .then(function () {
  //         console.log("SUCCESS");
  //       })
  //       .catch(function () {
  //         console.log("FAIL");
  //       });
  //   },
  //   handleFileUpload() {
  //     this.file = this.$refs.file.files[0];
  //   },
  // },
};
</script>

<style scoped>
.form-container {
  width: 500px;
  border: 2px solid #eee;
  margin-top: 5em;
  padding: 3em;
}
@media (max-width: 580px) {
  .form-container {
    width: 95%;
  }
}
</style>