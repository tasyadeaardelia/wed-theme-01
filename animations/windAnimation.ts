export const windAnimation = {
    initial: { scale: 1 }, // Posisi awal ukuran normal
    animate: {
      scale: [1, 1.2, 1, 1.2, 1], // Daun membesar dan mengecil secara bergantian
      transition: {
        duration: 20, // Durasi animasi untuk satu siklus
        repeat: Infinity, // Ulangi animasi terus-menerus
        repeatType: 'loop', // Ulangi animasi dengan loop
        ease: 'easeInOut', // Efek easing yang lembut pada awal dan akhir gerakan
      },
    },
};