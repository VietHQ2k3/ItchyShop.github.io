document.addEventListener("DOMContentLoaded", function() {
    // Dữ liệu giả lập
    const registrationData = {
        day: {
            all: 1,
            group: {
                user1: 1
            },
            item: {
                User1: 'admin',
            }
        },
        month: {
            all: 3,
            group: {
                user1: 1,
                user2: 1
            },
            item: {
                User1: 'JN',
                User2: 'ad',
                User3: 'admin'
            }
        },
        year: {
            all: 3,
            group: {
                user1: 1,
                user2: 1
            },
            item: {
                User1: 'JN',
                User2: 'ad',
                User3: 'admin'
            }
        }
    };

    // Hàm tạo báo cáo
    window.generateReport = function () {
        const category = document.getElementById('category').value;

        let reportHtml = '';

        if (category === 'day' || category === 'month' || category === 'year') {
            reportHtml += `<h2>Tổng số tài khoản đăng ký ${category === 'day' ? 'trong ngày' : category === 'month' ? 'trong tháng' : 'trong năm'}: ${registrationData[category].all}</h2>`;
            reportHtml += '<h3>Chi tiết từng tài khoản:</h3>';
            reportHtml += '<ul>';
            for (let item in registrationData[category].item) {
                reportHtml += `<li>${item}: ${registrationData[category].item[item]}</li>`;
            }
            reportHtml += '</ul>';
        }

        document.getElementById('report').innerHTML = reportHtml;
    };

    // Gọi hàm generateReport để tạo báo cáo ban đầu
    generateReport();
});