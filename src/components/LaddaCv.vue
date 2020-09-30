<template>
  <div class="container mx-auto">
    <div class="form-container mx-auto">
      <h1>Ladda upp Cv</h1>
      <h6>Här kan du ladda upp ditt Cv till ITHS Cv-databas.</h6>
      <form id="singleUploadForm" name="singleUploadForm">
        <div class="form-group mt-5">
          <label for="exampleFormControlFile1">Ladda upp Cv</label>
          <input
            name="file"
            class="form-control-file mt-3 file-input"
            type="file"
            ref="file"
            id="singleFileUploadInput"
            required
          />
          <button class="btn-color mt-5 primary submit-btn">Ladda upp</button>
        </div>
      </form>
      <div class="upload-response">
        <div id="singleFileUploadError"></div>
        <div id="singleFileUploadSuccess"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaddaCv",
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