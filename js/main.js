// hàm tính tiền
function TinhTien() {
  // lấy giá trị input
  var soKM = getEle("soKm").value;
  soKM = parseFloat(soKM);

  var thoiGianCho = getEle("waitingTime").value;
  thoiGianCho = parseFloat(thoiGianCho);

  // lấy loại xe
  var loaiXe = LayLoaiXe();

  if (loaiXe == "") {
    alert("Mời bạn chọn loại xe Uber!");
  } else if (isNaN(soKM) || soKM <= 0) {
    alert("Mời bạn nhập quãng đường (Km) đã đi (Số km phải lớn hơn 0).");
  } else if (thoiGianCho < 0 || isNaN(thoiGianCho)) {
    alert("Thời gian chờ phải lớn hơn hoặc bằng 0.");
  } else {
    // hàm chọn mức giá theo loại xe
    var mucGiaUber = PhanLoaiGia(loaiXe);
    var km1 = mucGiaUber.km1;
    var km2 = mucGiaUber.km2;
    var km3 = mucGiaUber.km3;
    var cho = mucGiaUber.cho;

    // tính tiền uber
    var thanhTien = CongThucTinhTien(
      loaiXe,
      soKM,
      thoiGianCho,
      km1,
      km2,
      km3,
      cho
    );

    // xuất kết quả
    getEle("xuatTien").innerHTML = thanhTien;

    // hiện ô thành tiền
    getEle("divThanhTien").style.display = "block";
  }
}

// hàm getelement
function getEle(id) {
  return document.getElementById(id);
}

// hàm check loại xe
function LayLoaiXe() {
  var loaiXe;

  var uberX = getEle("uberX").checked;
  var uberSUV = getEle("uberSUV").checked;
  var uberBlack = getEle("uberBlack").checked;

  if (uberX) {
    loaiXe = "uberX";
  } else if (uberSUV) {
    loaiXe = "uberSUV";
  } else if (uberBlack) {
    loaiXe = "uberBlack";
  } else {
    loaiXe = "";
  }

  return loaiXe;
}

// hàm chọn mức giá theo loại xe
function PhanLoaiGia(loaixe) {
  var km1;
  var km2;
  var km3;
  var cho;
  switch (loaixe) {
    case "uberX":
      km1 = 8000;
      km2 = 12000;
      km3 = 10000;
      cho = 2000;
      break;
    case "uberSUV":
      km1 = 9000;
      km2 = 14000;
      km3 = 12000;
      cho = 3000;
      break;
    case "uberBlack":
      km1 = 10000;
      km2 = 16000;
      km3 = 14000;
      cho = 4000;
      break;
  }
  return { km1, km2, km3, cho };
}

// công thức tính tiền
function CongThucTinhTien(loaiXe, soKM, thoiGianCho, km1, km2, km3, cho) {
  switch (loaiXe) {
    case "uberX":
      if (soKM >= 21) {
        thanhTien = 1 * km1 + 20 * km2 + (soKM - 21) * km3 + thoiGianCho * cho;
      } else if (soKM >= 1) {
        thanhTien = 1 * km1 + (soKM - 1) * km2 + thoiGianCho * cho;
      } else {
        thanhTien = km1 + thoiGianCho * cho;
      }

      break;

    case "uberSUV":
      if (soKM >= 21) {
        thanhTien = 1 * km1 + 20 * km2 + (soKM - 21) * km3 + thoiGianCho * cho;
      } else if (soKM >= 1) {
        thanhTien = 1 * km1 + (soKM - 1) * km2 + thoiGianCho * cho;
      } else {
        thanhTien = km1 + thoiGianCho * cho;
      }
      break;

    case "uberBlack":
      if (soKM >= 21) {
        thanhTien = 1 * km1 + 20 * km2 + (soKM - 21) * km3 + thoiGianCho * cho;
      } else if (soKM >= 1) {
        thanhTien = 1 * km1 + (soKM - 1) * km2 + thoiGianCho * cho;
      } else {
        thanhTien = km1 + thoiGianCho * cho;
      }
      break;
  }
  return thanhTien;
}

// HÀM IN HÓA ĐƠN
function InHoaDon() {
  // lấy dữ liệu input
  var soKM = getEle("soKm").value;
  soKM = parseFloat(soKM);

  var thoiGianCho = getEle("waitingTime").value;
  thoiGianCho = parseFloat(thoiGianCho);

  // lấy loại xe
  var loaiXe = LayLoaiXe();

  if (loaiXe == "") {
    alert("Mời bạn chọn loại xe Uber!");
  } else if (isNaN(soKM) || soKM <= 0) {
    alert("Mời bạn nhập quãng đường (Km) đã đi (Số km phải lớn hơn 0).");
  } else if (thoiGianCho < 0 || isNaN(thoiGianCho)) {
    alert("Thời gian chờ phải lớn hơn hoặc bằng 0.");
  } else {
    // hàm chọn mức giá theo loại xe
    var mucGiaUber = PhanLoaiGia(loaiXe);
    var km1 = mucGiaUber.km1;
    var km2 = mucGiaUber.km2;
    var km3 = mucGiaUber.km3;
    var cho = mucGiaUber.cho;

    // tính tiền uber
    var thanhTien = CongThucTinhTien(
      loaiXe,
      soKM,
      thoiGianCho,
      km1,
      km2,
      km3,
      cho
    );

    // xuất kết quả
    getEle("xuatTien").innerHTML = thanhTien;

    // hiện ô thành tiền
    getEle("divThanhTien").style.display = "block";
  }

  // in hóa đơn
  getEle("tbody").innerHTML = "";
  if (soKM >= 21) {
    /**DÒNG THỨ 1: 1KM */
    // tạo dòng
    var tagTR = document.createElement("tr");

    // tạo cột cho dòng
    var tagTD_loaiXe = document.createElement("td");
    var tagTD_suDung = document.createElement("td");
    var tagTD_donGia = document.createElement("td");
    var tagTD_thanhTien = document.createElement("td");

    // gắn nội dung cho cột
    tagTD_loaiXe.innerHTML = loaiXe;
    tagTD_suDung.innerHTML = "Mở cửa/1km";
    tagTD_donGia.innerHTML = km1;
    tagTD_thanhTien.innerHTML = km1 * 1;

    // gắn cột vào dòng
    tagTR.appendChild(tagTD_loaiXe);
    tagTR.appendChild(tagTD_suDung);
    tagTR.appendChild(tagTD_donGia);
    tagTR.appendChild(tagTD_thanhTien);

    // gắn dòng vào body
    getEle("tbody").appendChild(tagTR);
    /**========================================================= */

    /**DÒNG THỨ 2: 20KM */
    // tạo dòng
    var tagTR = document.createElement("tr");

    // tạo cột cho dòng
    var tagTD_loaiXe = document.createElement("td");
    var tagTD_suDung = document.createElement("td");
    var tagTD_donGia = document.createElement("td");
    var tagTD_thanhTien = document.createElement("td");

    // gắn nội dung cho cột
    tagTD_loaiXe.innerHTML = loaiXe;
    tagTD_suDung.innerHTML = "20km";
    tagTD_donGia.innerHTML = km2;
    tagTD_thanhTien.innerHTML = km2 * 20;

    // gắn cột vào dòng
    tagTR.appendChild(tagTD_loaiXe);
    tagTR.appendChild(tagTD_suDung);
    tagTR.appendChild(tagTD_donGia);
    tagTR.appendChild(tagTD_thanhTien);

    // gắn dòng vào body
    getEle("tbody").appendChild(tagTR);
    /**========================================================= */

    /**DÒNG THỨ 3: soKM */
    // tạo dòng
    var tagTR = document.createElement("tr");

    // tạo cột cho dòng
    var tagTD_loaiXe = document.createElement("td");
    var tagTD_suDung = document.createElement("td");
    var tagTD_donGia = document.createElement("td");
    var tagTD_thanhTien = document.createElement("td");

    // gắn nội dung cho cột
    tagTD_loaiXe.innerHTML = loaiXe;
    tagTD_suDung.innerHTML = soKM - 21 + " km";
    tagTD_donGia.innerHTML = km3;
    tagTD_thanhTien.innerHTML = km3 * (soKM - 21);

    // gắn cột vào dòng
    tagTR.appendChild(tagTD_loaiXe);
    tagTR.appendChild(tagTD_suDung);
    tagTR.appendChild(tagTD_donGia);
    tagTR.appendChild(tagTD_thanhTien);

    // gắn dòng vào body
    getEle("tbody").appendChild(tagTR);
    /**========================================================= */

    /**DÒNG THỨ 4: THỜI GIAN CHỜ */
    // tạo dòng
    var tagTR = document.createElement("tr");

    // tạo cột cho dòng
    var tagTD_loaiXe = document.createElement("td");
    var tagTD_suDung = document.createElement("td");
    var tagTD_donGia = document.createElement("td");
    var tagTD_thanhTien = document.createElement("td");

    // gắn nội dung cho cột
    tagTD_loaiXe.innerHTML = "Thời gian chờ";
    tagTD_suDung.innerHTML = thoiGianCho + " phút";
    tagTD_donGia.innerHTML = cho;
    tagTD_thanhTien.innerHTML = cho * thoiGianCho;

    // gắn cột vào dòng
    tagTR.appendChild(tagTD_loaiXe);
    tagTR.appendChild(tagTD_suDung);
    tagTR.appendChild(tagTD_donGia);
    tagTR.appendChild(tagTD_thanhTien);

    // gắn dòng vào body
    getEle("tbody").appendChild(tagTR);
    /**========================================================= */
    // IN THÀNH TIỀN
    getEle("thanhTien").innerHTML = thanhTien;
  } else if (soKM >= 1) {
    /**DÒNG THỨ 1: 1KM */
    // tạo dòng
    var tagTR = document.createElement("tr");

    // tạo cột cho dòng
    var tagTD_loaiXe = document.createElement("td");
    var tagTD_suDung = document.createElement("td");
    var tagTD_donGia = document.createElement("td");
    var tagTD_thanhTien = document.createElement("td");

    // gắn nội dung cho cột
    tagTD_loaiXe.innerHTML = loaiXe;
    tagTD_suDung.innerHTML = "Mở cửa/1km";
    tagTD_donGia.innerHTML = km1;
    tagTD_thanhTien.innerHTML = km1 * 1;

    // gắn cột vào dòng
    tagTR.appendChild(tagTD_loaiXe);
    tagTR.appendChild(tagTD_suDung);
    tagTR.appendChild(tagTD_donGia);
    tagTR.appendChild(tagTD_thanhTien);

    // gắn dòng vào body
    getEle("tbody").appendChild(tagTR);
    /**========================================================= */

    /**DÒNG THỨ 2: soKM */
    // tạo dòng
    var tagTR = document.createElement("tr");

    // tạo cột cho dòng
    var tagTD_loaiXe = document.createElement("td");
    var tagTD_suDung = document.createElement("td");
    var tagTD_donGia = document.createElement("td");
    var tagTD_thanhTien = document.createElement("td");

    // gắn nội dung cho cột
    tagTD_loaiXe.innerHTML = loaiXe;
    tagTD_suDung.innerHTML = soKM - 1 + " km";
    tagTD_donGia.innerHTML = km2;
    tagTD_thanhTien.innerHTML = km2 * (soKM - 1);

    // gắn cột vào dòng
    tagTR.appendChild(tagTD_loaiXe);
    tagTR.appendChild(tagTD_suDung);
    tagTR.appendChild(tagTD_donGia);
    tagTR.appendChild(tagTD_thanhTien);

    // gắn dòng vào body
    getEle("tbody").appendChild(tagTR);
    /**========================================================= */

    /**DÒNG THỨ 3: THỜI GIAN CHỜ */
    // tạo dòng
    var tagTR = document.createElement("tr");

    // tạo cột cho dòng
    var tagTD_loaiXe = document.createElement("td");
    var tagTD_suDung = document.createElement("td");
    var tagTD_donGia = document.createElement("td");
    var tagTD_thanhTien = document.createElement("td");

    // gắn nội dung cho cột
    tagTD_loaiXe.innerHTML = "Thời gian chờ";
    tagTD_suDung.innerHTML = thoiGianCho + " phút";
    tagTD_donGia.innerHTML = cho;
    tagTD_thanhTien.innerHTML = cho * thoiGianCho;

    // gắn cột vào dòng
    tagTR.appendChild(tagTD_loaiXe);
    tagTR.appendChild(tagTD_suDung);
    tagTR.appendChild(tagTD_donGia);
    tagTR.appendChild(tagTD_thanhTien);

    // gắn dòng vào body
    getEle("tbody").appendChild(tagTR);
    /**========================================================= */
    // IN THÀNH TIỀN
    getEle("thanhTien").innerHTML = thanhTien;
  } else if (soKM < 1) {
    /**DÒNG THỨ 1: 1KM */
    // tạo dòng
    var tagTR = document.createElement("tr");

    // tạo cột cho dòng
    var tagTD_loaiXe = document.createElement("td");
    var tagTD_suDung = document.createElement("td");
    var tagTD_donGia = document.createElement("td");
    var tagTD_thanhTien = document.createElement("td");

    // gắn nội dung cho cột
    tagTD_loaiXe.innerHTML = loaiXe;
    tagTD_suDung.innerHTML = "Mở cửa/1km";
    tagTD_donGia.innerHTML = km1;
    tagTD_thanhTien.innerHTML = km1 * 1;

    // gắn cột vào dòng
    tagTR.appendChild(tagTD_loaiXe);
    tagTR.appendChild(tagTD_suDung);
    tagTR.appendChild(tagTD_donGia);
    tagTR.appendChild(tagTD_thanhTien);

    // gắn dòng vào body
    getEle("tbody").appendChild(tagTR);

    /**DÒNG THỨ 2: THỜI GIAN CHỜ */
    // tạo dòng
    var tagTR = document.createElement("tr");

    // tạo cột cho dòng
    var tagTD_loaiXe = document.createElement("td");
    var tagTD_suDung = document.createElement("td");
    var tagTD_donGia = document.createElement("td");
    var tagTD_thanhTien = document.createElement("td");

    // gắn nội dung cho cột
    tagTD_loaiXe.innerHTML = "Thời gian chờ";
    tagTD_suDung.innerHTML = thoiGianCho + " phút";
    tagTD_donGia.innerHTML = cho;
    tagTD_thanhTien.innerHTML = cho * thoiGianCho;

    // gắn cột vào dòng
    tagTR.appendChild(tagTD_loaiXe);
    tagTR.appendChild(tagTD_suDung);
    tagTR.appendChild(tagTD_donGia);
    tagTR.appendChild(tagTD_thanhTien);

    // gắn dòng vào body
    getEle("tbody").appendChild(tagTR);
    /**========================================================= */
    // IN THÀNH TIỀN
    getEle("thanhTien").innerHTML = thanhTien;
  }
}
