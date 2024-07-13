document.addEventListener('DOMContentLoaded', function () {
    // Dữ liệu giả lập
    const salesData = {
        day: {
            all: 83000000,
            group: {
                Giay: 15000000,
                Cap: 16500000,
                Kinh: 50000000,
                BinhNuoc: 1500000
            },
            item: {
                Giay1: 5000000,
                Giay2: 10000000,
                Cap1: 11000000,
                Cap7:  5500000,
                BinhNuoc1: 1500000,
                Kinh1: 50000000
            }
        },
        week: {
            all: 83000000,
            group: {
                Giay: 15000000,
                Cap: 16500000,
                Kinh: 50000000,
                BinhNuoc: 1500000
            },
            item: {
                Giay1: 5000000,
                Giay2: 10000000,
                Cap1:  11000000,
                Cap7:  5500000,
                BinhNuoc1: 1500000,
                Kinh1: 50000000
            }
        },
        month: {
            all: 83000000,
            group: {
                Giay: 15000000,
                Cap: 16500000,
                Kinh: 50000000,
                BinhNuoc: 1500000
            },
            item: {
                Giay1: 5000000,
                Giay2: 10000000,
                Cap1:  11000000,
                Cap7:  5500000,
                BinhNuoc1: 1500000,
                Kinh1: 50000000
            }
        }
    };

    // Hàm tạo báo cáo
    window.generateReport = function () {
        const period = document.getElementById('period').value;
        const category = document.getElementById('category').value;

        let reportHtml = '';

        if (category === 'all') {
            reportHtml = `<h2>Tổng Doanh Thu ${period === 'day' ? 'Trong Ngày' : period === 'week' ? 'Trong Tuần' : 'Trong Tháng'}: ${salesData[period].all} VND</h2>`;
        } else if (category === 'group') {
            reportHtml = `<h2>Doanh Thu Theo Nhóm Mặt Hàng ${period === 'day' ? 'Trong Ngày' : period === 'week' ? 'Trong Tuần' : 'Trong Tháng'}:</h2>`;
            reportHtml += '<ul>';
            for (let group in salesData[period].group) {
                reportHtml += `<li>${group}: ${salesData[period].group[group]} VND</li>`;
            }
            reportHtml += '</ul>';
        } else if (category === 'item') {
            reportHtml = `<h2>Doanh Thu Theo Từng Mặt Hàng ${period === 'day' ? 'Trong Ngày' : period === 'week' ? 'Trong Tuần' : 'Trong Tháng'}:</h2>`;
            reportHtml += '<ul>';
            for (let item in salesData[period].item) {
                reportHtml += `<li>${item}: ${salesData[period].item[item]} VND</li>`;
            }
            reportHtml += '</ul>';
        }

        document.getElementById('report').innerHTML = reportHtml;
    };
});