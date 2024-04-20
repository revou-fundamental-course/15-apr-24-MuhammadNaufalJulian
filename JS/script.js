document.addEventListener('DOMContentLoaded', function () {
    // Dapatkan elemen-elemen yang dibutuhkan
    const celciusInput = document.getElementById('celcius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    const fahrenheitReverseInput = document.getElementById('fahrenheit-reverse-input');
    const celciusReverseInput = document.getElementById('celcius-reverse-input');
    const convertButton = document.getElementById('convert-button');
    const resetButton = document.getElementById('reset-button');
    const reverseButton = document.getElementById('reverse-button');
    const rumusText = document.querySelector('.section-rumus textarea');

    // Fungsi untuk mengonversi suhu dari Celcius ke Fahrenheit
    function celciusToFahrenheit(celcius) {
        return (celcius * 9 / 5) + 32;
    }

    // Fungsi untuk mengonversi suhu dari Fahrenheit ke Celcius
    function fahrenheitToCelcius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // Tambahkan event listener untuk tombol konversi
    convertButton.addEventListener('click', function () {
        if (reverseButton.dataset.reverse === 'true') {
            // Ambil nilai dari input Fahrenheit untuk reverse
            const fahrenheitValue = parseFloat(fahrenheitReverseInput.value);
            
            // Lakukan konversi Fahrenheit ke Celcius
            const celciusValue = fahrenheitToCelcius(fahrenheitValue);

            // Tampilkan hasil konversi pada input Celcius untuk reverse
            celciusReverseInput.value = celciusValue.toFixed(2);

            // Update teks rumus
            rumusText.textContent = `Rumus: (${fahrenheitValue} - 32) * 5/9 = ${celciusValue.toFixed(2)} Celcius .  || Fahrenheit (F) ke Celsius (C) : C = 5/9 x (F-32)`;
        } else {
            // Ambil nilai dari input Celcius
            const celciusValue = parseFloat(celciusInput.value);

            // Lakukan konversi Celcius ke Fahrenheit
            const fahrenheitValue = celciusToFahrenheit(celciusValue);

            // Tampilkan hasil konversi pada input Fahrenheit
            fahrenheitInput.value = fahrenheitValue.toFixed(2);

            // Update teks rumus
            rumusText.textContent = `Rumus: (${celciusValue} * 9/5) + 32 = ${fahrenheitValue.toFixed(2)} Fahrenheit. || °C = 5/9 x (°F - 32). Atau bisa juga dengan rumus: °F = (9/5 x °C) + 32.`;
        }
        });

    // Tambahkan event listener untuk tombol reset
    resetButton.addEventListener('click', function () {
        // Reset nilai input Celcius dan Fahrenheit
        celciusInput.value = '';
        fahrenheitInput.value = '';
        fahrenheitReverseInput.value = '';
        celciusReverseInput.value = '';

        // Kosongkan teks rumus
        rumusText.textContent = '';
    });

    reverseButton.addEventListener('click', function () {
        // Ubah atribut data untuk menandakan bahwa posisi konversi telah diubah
        if (reverseButton.dataset.reverse === 'false') {
            reverseButton.dataset.reverse = 'true';
            reverseButton.textContent = 'REVERSE';
            
            // Tambahkan atau hapus kelas pada elemen untuk mempertahankan tampilan
            document.getElementById('celcius-fahrenheit').classList.add('hidden');
            document.getElementById('fahrenheit-celcius').classList.remove('hidden');
        } else {
            reverseButton.dataset.reverse = 'false';
            reverseButton.textContent = 'REVERSE';
            
            // Tambahkan atau hapus kelas pada elemen untuk mempertahankan tampilan
            document.getElementById('celcius-fahrenheit').classList.remove('hidden');
            document.getElementById('fahrenheit-celcius').classList.add('hidden');
        }
    
        // Kosongkan teks rumus saat tombol reverse ditekan
        rumusText.textContent = '';
    });
    
});
