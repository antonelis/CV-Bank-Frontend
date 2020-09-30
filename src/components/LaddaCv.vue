<template>
  <div class="container mx-auto">
    <!-- <div class="form-container mx-auto">
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
          />
          <button class="btn-color mt-5">Ladda upp</button>
        </div>
      </form>
    </div> -->

    <!-- TEST -->
    <input type="file" @change="onFileChanged" />
    <button @click="onUpload">Upload!</button>
  </div>
</template>

<script>
export default {
  name: "LaddaCv",

  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      // upload file, get it from this.selectedFile
      const formData = new FormData();
      formData.append("myFile", this.selectedFile, this.selectedFile.name);
      axios.post("http://localhost:8080/uploadFile", formData).then((res) => {
        console.log(res);
      });
    },
  },
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