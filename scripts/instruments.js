const allNotes_regular = [
  { name: "C6", frequency: 1046.50, mp3: "piano/C6.mp3", position: 140 },
  { name: "H5", frequency: 987.77, mp3: "piano/B5.mp3", position: 130 },
  { name: "B5", frequency: 932.33, mp3: "piano/A5di.mp3", position: 130 },
  { name: "A#5", frequency: 932.33, mp3: "piano/A5di.mp3", position: 120 },
  { name: "A5", frequency: 880.00, mp3: "piano/A5.mp3", position: 120 },
  { name: "Ab5", frequency: 830.61, mp3: "piano/G5di.mp3", position: 120 },
  { name: "G#5", frequency: 830.61, mp3: "piano/G5di.mp3", position: 110 },
  { name: "G5", frequency: 783.99, mp3: "piano/G5.mp3", position: 110 },
  { name: "Gb5", frequency: 739.99, mp3: "piano/F5di.mp3", position: 110 },
  { name: "F#5", frequency: 739.99, mp3: "piano/F5di.mp3", position: 100 },
  { name: "F5", frequency: 698.46, mp3: "piano/F5.mp3", position: 100 },
  { name: "E5", frequency: 659.25, mp3: "piano/E5.mp3", position: 90 },
  { name: "Eb5", frequency: 622.25, mp3: "piano/D5di.mp3", position: 90 },
  { name: "D#5", frequency: 622.25, mp3: "piano/D5di.mp3", position: 80 },
  { name: "D5", frequency: 587.33, mp3: "piano/D5.mp3", position: 80 },
  { name: "Db5", frequency: 554.37, mp3: "piano/C5di.mp3", position: 80 },
  { name: "C#5", frequency: 554.37, mp3: "piano/C5di.mp3", position: 70 },
  { name: "C5", frequency: 523.25, mp3: "piano/C5.mp3", position: 70 },
  { name: "H4", frequency: 493.88, mp3: "piano/B4.mp3", position: 60 },
  { name: "B4", frequency: 466.16, mp3: "piano/A4di.mp3", position: 60 },
  { name: "A#4", frequency: 466.16, mp3: "piano/A4di.mp3", position: 50 },
  { name: "A4", frequency: 440.00, mp3: "piano/A4.mp3", position: 50 },
  { name: "Ab4", frequency: 415.30, mp3: "piano/G4di.mp3", position: 50 },
  { name: "G#4", frequency: 415.30, mp3: "piano/G4di.mp3", position: 40 },
  { name: "G4", frequency: 392.00, mp3: "piano/G4.mp3", position: 40 },
  { name: "Gb4", frequency: 369.99, mp3: "piano/F4di.mp3", position: 40 },
  { name: "F#4", frequency: 369.99, mp3: "piano/F4di.mp3", position: 30 },
  { name: "F4", frequency: 349.23, mp3: "piano/F4.mp3", position: 30 },
  { name: "E4", frequency: 329.63, mp3: "piano/E4.mp3", position: 20 },
  { name: "Eb4", frequency: 311.13, mp3: "piano/D4di.mp3", position: 20 },
  { name: "D#4", frequency: 311.13, mp3: "piano/D4di.mp3", position: 10 },
  { name: "D4", frequency: 293.66, mp3: "piano/D4.mp3", position: 10 },
  { name: "Db4", frequency: 277.18, mp3: "piano/C4di.mp3", position: 10 },
  { name: "C#4", frequency: 277.18, mp3: "piano/C4di.mp3", position: 0 },
  { name: "C4", frequency: 261.63, mp3: "piano/C4.mp3", position: 0 }, // Positioned for middle C
  { name: "H3", frequency: 246.94, mp3: "piano/B3.mp3", position: -10 },
  { name: "B3", frequency: 233.08, mp3: "piano/A3di.mp3", position: -10 },
  { name: "A#3", frequency: 233.08, mp3: "piano/A3di.mp3", position: -20 },
  { name: "A3", frequency: 220.00, mp3: "piano/A3.mp3", position: -20 },
  { name: "Ab3", frequency: 207.65, mp3: "piano/G3di.mp3", position: -20 },
  { name: "G#3", frequency: 207.65, mp3: "piano/G3di.mp3", position: -30 },
  { name: "G3", frequency: 196.00, mp3: "piano/G3.mp3", position: -30 },
  { name: "Gb3", frequency: 185.00, mp3: "piano/F3di.mp3", position: -30 },
  { name: "F#3", frequency: 185.00, mp3: "piano/F3di.mp3", position: -40 },
  { name: "F3", frequency: 174.61, mp3: "piano/F3.mp3", position: -40 },
  { name: "E3", frequency: 164.81, mp3: "piano/E3.mp3", position: -50 },
  { name: "Eb3", frequency: 155.56, mp3: "piano/D3di.mp3", position: -50 },
  { name: "D#3", frequency: 155.56, mp3: "piano/D3di.mp3", position: -60 },
  { name: "D3", frequency: 146.83, mp3: "piano/D3.mp3", position: -60 },
  { name: "Db3", frequency: 138.59, mp3: "piano/C3di.mp3", position: -60 },
  { name: "C#3", frequency: 138.59, mp3: "piano/C3di.mp3", position: -70 },
  { name: "C3", frequency: 130.81, mp3: "piano/C3.mp3", position: -70 },
  { name: "H2", frequency: 123.47, mp3: "piano/B2.mp3", position: -80 },
  { name: "B2", frequency: 116.54, mp3: "piano/A2di.mp3", position: -80 },
  { name: "A#2", frequency: 116.54, mp3: "piano/A2di.mp3", position: -90 },
  { name: "A2", frequency: 110.00, mp3: "piano/A2.mp3", position: -90 },
  { name: "Ab2", frequency: 103.83, mp3: "piano/G2di.mp3", position: -90 },
  { name: "G#2", frequency: 103.83, mp3: "piano/G2di.mp3", position: -100 },
  { name: "G2", frequency: 98.00, mp3: "piano/G2.mp3", position: -100 },
  { name: "Gb2", frequency: 92.50, mp3: "piano/F2di.mp3", position: -100 },
  { name: "F#2", frequency: 92.50, mp3: "piano/F2di.mp3", position: -110 },
  { name: "F2", frequency: 87.31, mp3: "piano/F2.mp3", position: -110 },
  { name: "E2", frequency: 82.41, mp3: "piano/E2.mp3", position: -120 },
  { name: "Eb2", frequency: 77.78, mp3: "piano/D2di.mp3", position: -120 },
  { name: "D#2", frequency: 77.78, mp3: "piano/D2di.mp3", position: -130 },
  { name: "D2", frequency: 73.42, mp3: "piano/D2.mp3", position: -130 },
  { name: "Db2", frequency: 69.30, mp3: "piano/C2di.mp3", position: -130 },
  { name: "C#2", frequency: 69.30, mp3: "piano/C2di.mp3", position: -140 },
  { name: "C2", frequency: 65.41, mp3: "piano/C2.mp3", position: -140 },
  { name: "H1", frequency: 61.74, mp3: "piano/B1.mp3", position: -150 },
  { name: "B1", frequency: 58.27, mp3: "piano/A1di.mp3", position: -150 },
  { name: "A#1", frequency: 58.27, mp3: "piano/A1di.mp3", position: -160 },
  { name: "A1", frequency: 55.00, mp3: "piano/A1.mp3", position: -160 },
  { name: "Ab1", frequency: 51.91, mp3: "piano/G1di.mp3", position: -160 },
  { name: "G#1", frequency: 51.91, mp3: "piano/G1di.mp3", position: -170 },
  { name: "G1", frequency: 49.00, mp3: "piano/G1.mp3", position: -170 },
  { name: "Gb1", frequency: 46.25, mp3: "piano/F1di.mp3", position: -170 },
  { name: "F#1", frequency: 46.25, mp3: "piano/F1di.mp3", position: -180 },
  { name: "F1", frequency: 43.65, mp3: "piano/F1.mp3", position: -180 },
  { name: "E1", frequency: 41.20, mp3: "piano/E1.mp3", position: -190 },
  { name: "Eb1", frequency: 38.89, mp3: "piano/D1di.mp3", position: -190 },
  { name: "D#1", frequency: 38.89, mp3: "piano/D1di.mp3", position: -200 },
  { name: "D1", frequency: 36.71, mp3: "piano/D1.mp3", position: -200 },
  { name: "Db1", frequency: 34.65, mp3: "piano/C1di.mp3", position: -200 },
  { name: "C#1", frequency: 34.65, mp3: "piano/C1di.mp3", position: -210 },
  { name: "C1", frequency: 32.70, mp3: "piano/C1.mp3", position: -210 }
];
const allNotes_sax_alt = [			
  { name: "C7"	, frequency:  1244.50 ,	mp3: "saxAlt/C7.mp3"	, position:  210  },
  { name: "H6"	, frequency:  1174.66 ,	mp3: "saxAlt/B6.mp3"	, position:  200  },
  { name: "B6"	, frequency:  1108.74 ,	mp3: "saxAlt/A6di.mp3"	, position:  200  },
  { name: "A#6"	, frequency:  1108.74 ,	mp3: "saxAlt/A6di.mp3"	, position:  190  },
  { name: "A6"	, frequency:  1046.50 ,	mp3: "saxAlt/A6.mp3"	, position:  190  },
  { name: "Ab6"	, frequency:  987.76 ,	mp3: "saxAlt/G6di.mp3"	, position:  190  },
  { name: "G#6"	, frequency:  987.76 ,	mp3: "saxAlt/G6di.mp3"	, position:  180  },
  { name: "G6"	, frequency:  932.32 ,	mp3: "saxAlt/G6.mp3"	, position:  180  },
  { name: "Gb6"	, frequency:  880.00 ,	mp3: "saxAlt/F6di.mp3"	, position:  180  },
  { name: "F#6"	, frequency:  880.00 ,	mp3: "saxAlt/F6di.mp3"	, position:  170  },
  { name: "F6"	, frequency:  830.60 ,	mp3: "saxAlt/F6.mp3"	, position:  170  },
  { name: "E6"	, frequency:  784.00 ,	mp3: "saxAlt/E6.mp3"	, position:  160  },
  { name: "Eb6"	, frequency:  739.98 ,	mp3: "saxAlt/D6di.mp3"	, position:  160  },
  { name: "D#6"	, frequency:  739.98 ,	mp3: "saxAlt/D6di.mp3"	, position:  150  },
  { name: "D6"	, frequency:  698.46 ,	mp3: "saxAlt/D6.mp3"	, position:  150  },
  { name: "Db6"	, frequency:  659.26 ,	mp3: "saxAlt/C6di.mp3"	, position:  150  },
  { name: "C#6"	, frequency:  659.26 ,	mp3: "saxAlt/C6di.mp3"	, position:  140  },
  { name: "C6"	, frequency:  622.25 ,	mp3: "saxAlt/C6.mp3"	, position:  140  },
  { name: "H5"	, frequency:  587.33 ,	mp3: "saxAlt/B5.mp3"	, position:  130  },
  { name: "B5"	, frequency:  554.37 ,	mp3: "saxAlt/A5di.mp3"	, position:  130  },
  { name: "A#5"	, frequency:  554.37 ,	mp3: "saxAlt/A5di.mp3"	, position:  120  },
  { name: "A5"	, frequency:  523.25 ,	mp3: "saxAlt/A5.mp3"	, position:  120  },
  { name: "Ab5"	, frequency:  493.88 ,	mp3: "saxAlt/G5di.mp3"	, position:  120  },
  { name: "G#5"	, frequency:  493.88 ,	mp3: "saxAlt/G5di.mp3"	, position:  110  },
  { name: "G5"	, frequency:  466.16 ,	mp3: "saxAlt/G5.mp3"	, position:  110  },
  { name: "Gb5"	, frequency:  440.00 ,	mp3: "saxAlt/F5di.mp3"	, position:  110  },
  { name: "F#5"	, frequency:  440.00 ,	mp3: "saxAlt/F5di.mp3"	, position:  100  },
  { name: "F5"	, frequency:  415.30 ,	mp3: "saxAlt/F5.mp3"	, position:  100  },
  { name: "E5"	, frequency:  392.00 ,	mp3: "saxAlt/E5.mp3"	, position:  90  },
  { name: "Eb5"	, frequency:  369.99 ,	mp3: "saxAlt/D5di.mp3"	, position:  90  },
  { name: "D#5"	, frequency:  369.99 ,	mp3: "saxAlt/D5di.mp3"	, position:  80  },
  { name: "D5"	, frequency:  349.23 ,	mp3: "saxAlt/D5.mp3"	, position:  80  },
  { name: "Db5"	, frequency:  329.63 ,	mp3: "saxAlt/C5di.mp3"	, position:  80  },
  { name: "C#5"	, frequency:  329.63 ,	mp3: "saxAlt/C5di.mp3"	, position:  70  },
  { name: "C5"	, frequency:  311.13 ,	mp3: "saxAlt/C5.mp3"	, position:  70  },
  { name: "H4"	, frequency:  293.66 ,	mp3: "saxAlt/B4.mp3"	, position:  60  },
  { name: "B4"	, frequency:  277.18 ,	mp3: "saxAlt/A4di.mp3"	, position:  60  },
  { name: "A#4"	, frequency:  277.18 ,	mp3: "saxAlt/A4di.mp3"	, position:  50  },
  { name: "A4"	, frequency:  261.63 ,	mp3: "saxAlt/A4.mp3"	, position:  50  },
  { name: "Ab4"	, frequency:  246.94 ,	mp3: "saxAlt/G4di.mp3"	, position:  50  },
  { name: "G#4"	, frequency:  246.94 ,	mp3: "saxAlt/G4di.mp3"	, position:  40  },
  { name: "G4"	, frequency:  233.08 ,	mp3: "saxAlt/G4.mp3"	, position:  40  },
  { name: "Gb4"	, frequency:  220.00 ,	mp3: "saxAlt/F4di.mp3"	, position:  40  },
  { name: "F#4"	, frequency:  220.00 ,	mp3: "saxAlt/F4di.mp3"	, position:  30  },
  { name: "F4"	, frequency:  207.65 ,	mp3: "saxAlt/F4.mp3"	, position:  30  },
  { name: "E4"	, frequency:  196.00 ,	mp3: "saxAlt/E4.mp3"	, position:  20  },
  { name: "Eb4"	, frequency:  185.00 ,	mp3: "saxAlt/D4di.mp3"	, position:  20  },
  { name: "D#4"	, frequency:  185.00 ,	mp3: "saxAlt/D4di.mp3"	, position:  10  },
  { name: "D4"	, frequency:  174.61 ,	mp3: "saxAlt/D4.mp3"	, position:  10  },
  { name: "Db4"	, frequency:  164.81 ,	mp3: "saxAlt/C4di.mp3"	, position:  10  },
  { name: "C#4"	, frequency:  164.81 ,	mp3: "saxAlt/C4di.mp3"	, position:  0  },
  { name: "C4"	, frequency:  155.56 ,	mp3: "saxAlt/C4.mp3"	, position:  0  },
  { name: "H3"	, frequency:  146.83 ,	mp3: "saxAlt/C4di.mp3"	, position: -10  },
  { name: "B3"	, frequency:  138.59 ,	mp3: "saxAlt/A3di.mp3"	, position: -10  },
  { name: "A#3"	, frequency:  138.59 ,	mp3: "saxAlt/A3di.mp3"	, position: -20  },
  { name: "A3"	, frequency:  130.81 ,	mp3: "saxAlt/A3.mp3"	, position: -20  },
  { name: "Ab3"	, frequency:  123.47 ,	mp3: "saxAlt/G3di.mp3"	, position: -20  },
  { name: "G#3"	, frequency:  123.47 ,	mp3: "saxAlt/G3di.mp3"	, position: -30  },
  { name: "G3"	, frequency:  116.54 ,	mp3: "saxAlt/G3.mp3"	, position: -30  },
  { name: "Gb3"	, frequency:  110.00 ,	mp3: "saxAlt/F3di.mp3"	, position: -30  },
  { name: "F#3"	, frequency:  110.00 ,	mp3: "saxAlt/F3di.mp3"	, position: -40  },
  { name: "F3"	, frequency:  103.83 ,	mp3: "saxAlt/F3.mp3"	, position: -40  },
  { name: "E3"	, frequency:  98.00 ,	mp3: "saxAlt/E3.mp3"	, position: -50  },
  { name: "Eb3"	, frequency:  92.50 ,	mp3: "saxAlt/D3di.mp3"	, position: -50  },
  { name: "D#3"	, frequency:  92.50 ,	mp3: "saxAlt/D3di.mp3"	, position: -60  },
  { name: "D3"	, frequency:  87.31 ,	mp3: "saxAlt/D3.mp3"	, position: -60  },
  { name: "Db3"	, frequency:  82.41 ,	mp3: "saxAlt/C3di.mp3"	, position: -60  },
  { name: "C#3"	, frequency:  82.41 ,	mp3: "saxAlt/C3di.mp3"	, position: -70  },
  { name: "C3"	, frequency:  77.78 ,	mp3: "saxAlt/C3.mp3"	, position: -70  },
  { name: "H2"	, frequency:  73.42 ,	mp3: "saxAlt/B2.mp3"	, position: -80  },
  { name: "B2"	, frequency:  69.30 ,	mp3: "saxAlt/A2di.mp3"	, position: -80  },
  { name: "A#2"	, frequency:  69.30 ,	mp3: "saxAlt/A2di.mp3"	, position: -90  },
  { name: "A2"	, frequency:  65.41 ,	mp3: "saxAlt/A2.mp3"	, position: -90  },
  { name: "Ab2"	, frequency:  61.74 ,	mp3: "saxAlt/G2di.mp3"	, position: -90  },
  { name: "G#2"	, frequency:  61.74 ,	mp3: "saxAlt/G2di.mp3"	, position: -100  },
  { name: "G2"	, frequency:  58.27 ,	mp3: "saxAlt/G2.mp3"	, position: -100  },
  { name: "Gb2"	, frequency:  55.00 ,	mp3: "saxAlt/F2di.mp3"	, position: -100  },
  { name: "F#2"	, frequency:  55.00 ,	mp3: "saxAlt/F2di.mp3"	, position: -110  },
  { name: "F2"	, frequency:  51.91 ,	mp3: "saxAlt/F2.mp3"	, position: -110  },
  { name: "E2"	, frequency:  49.00 ,	mp3: "saxAlt/E2.mp3"	, position: -120  },
  { name: "Eb2"	, frequency:  46.25 ,	mp3: "saxAlt/D2di.mp3"	, position: -120  },
  { name: "D#2"	, frequency:  46.25 ,	mp3: "saxAlt/D2di.mp3"	, position: -130  },
  { name: "D2"	, frequency:  43.65 ,	mp3: "saxAlt/D2.mp3"	, position: -130  },
  { name: "Db2"	, frequency:  41.20 ,	mp3: "saxAlt/C2di.mp3"	, position: -130  },
  { name: "C#2"	, frequency:  41.20 ,	mp3: "saxAlt/C2di.mp3"	, position: -140  },
  { name: "C2"	, frequency:  38.89 ,	mp3: "saxAlt/C2.mp3"	, position: -140  },
  { name: "H1"	, frequency:  36.71 ,	mp3: "saxAlt/B1.mp3"	, position: -150  },
  { name: "B1"	, frequency:  34.65 ,	mp3: "saxAlt/A1di.mp3"	, position: -150  },
  { name: "A#1"	, frequency:  34.65 ,	mp3: "saxAlt/A1di.mp3"	, position: -160  },
  { name: "A1"	, frequency:  32.70 ,	mp3: "saxAlt/A1.mp3"	, position: -160  },
  { name: "Ab1"	, frequency:  30.87 ,	mp3: "saxAlt/G1di.mp3"	, position: -160  },
  { name: "G#1"	, frequency:  30.87 ,	mp3: "saxAlt/G1di.mp3"	, position: -170  },
  { name: "G1"	, frequency:  29.14 ,	mp3: "saxAlt/G1.mp3"	, position: -170  },
  { name: "Gb1"	, frequency:  27.50 ,	mp3: "saxAlt/F1di.mp3"	, position: -170  },
  { name: "F#1"	, frequency:  27.50 ,	mp3: "saxAlt/F1di.mp3"	, position: -180  },
  { name: "F1"	, frequency:  25.96 ,	mp3: "saxAlt/F1.mp3"	, position: -180  },
  { name: "E1"	, frequency:  24.50 ,	mp3: "saxAlt/E1.mp3"	, position: -190  },
  { name: "Eb1"	, frequency:  23.13 ,	mp3: "saxAlt/D1di.mp3"	, position: -190  },
  { name: "D#1"	, frequency:  23.13 ,	mp3: "saxAlt/D1di.mp3"	, position: -200  },
  { name: "D1"	, frequency:  21.83 ,	mp3: "saxAlt/D1.mp3"	, position: -200  },
  { name: "Db1"	, frequency:  20.60 ,	mp3: "saxAlt/C1di.mp3"	, position: -200  },
  { name: "C#1"	, frequency:  20.60 ,	mp3: "saxAlt/C1di.mp3"	, position: -210  },
  { name: "C1"	, frequency:  19.45 ,	mp3: "saxAlt/C1.mp3"	, position: -210  }
];			   
const allNotes_sax_tenor = [			
  { name: "C7", frequency: 932.33, mp3: "saxTenor/C7.mp3", position: 210 },
  { name: "H6", frequency: 880.00, mp3: "saxTenor/B6.mp3", position: 200 },
  { name: "B6", frequency: 830.61, mp3: "saxTenor/A6di.mp3", position: 200 },
  { name: "A#6", frequency: 830.61, mp3: "saxTenor/A6di.mp3", position: 190 },
  { name: "A6", frequency: 783.99, mp3: "saxTenor/A6.mp3", position: 190 },
  { name: "Ab6", frequency: 739.99, mp3: "saxTenor/G6di.mp3", position: 190 },
  { name: "G#6", frequency: 739.99, mp3: "saxTenor/G6di.mp3", position: 180 },
  { name: "G6", frequency: 698.46, mp3: "saxTenor/G6.mp3", position: 180 },
  { name: "Gb6", frequency: 659.25, mp3: "saxTenor/F6di.mp3", position: 180 },
  { name: "F#6", frequency: 659.25, mp3: "saxTenor/F6di.mp3", position: 170 },
  { name: "F6", frequency: 622.25, mp3: "saxTenor/F6.mp3", position: 170 },
  { name: "E6", frequency: 587.33, mp3: "saxTenor/E6.mp3", position: 160 },
  { name: "Eb6", frequency: 554.37, mp3: "saxTenor/D6di.mp3", position: 160 },
  { name: "D#6", frequency: 554.37, mp3: "saxTenor/D6di.mp3", position: 150 },
  { name: "D6", frequency: 523.25, mp3: "saxTenor/D6.mp3", position: 150 },
  { name: "Db6", frequency: 493.88, mp3: "saxTenor/C6di.mp3", position: 150 },
  { name: "C#6", frequency: 493.88, mp3: "saxTenor/C6di.mp3", position: 140 },
  { name: "C6", frequency: 466.16, mp3: "saxTenor/C6.mp3", position: 140 },
  { name: "H5", frequency: 440.00, mp3: "saxTenor/B5.mp3", position: 130 },
  { name: "B5", frequency: 415.30, mp3: "saxTenor/A5di.mp3", position: 130 },
  { name: "A#5", frequency: 415.30, mp3: "saxTenor/A5di.mp3", position: 120 },
  { name: "A5", frequency: 392.00, mp3: "saxTenor/A5.mp3", position: 120 },
  { name: "Ab5", frequency: 369.99, mp3: "saxTenor/G5di.mp3", position: 120 },
  { name: "G#5", frequency: 369.99, mp3: "saxTenor/G5di.mp3", position: 110 },
  { name: "G5", frequency: 349.23, mp3: "saxTenor/G5.mp3", position: 110 },
  { name: "Gb5", frequency: 329.63, mp3: "saxTenor/F5di.mp3", position: 110 },
  { name: "F#5", frequency: 329.63, mp3: "saxTenor/F5di.mp3", position: 100 },
  { name: "F5", frequency: 311.13, mp3: "saxTenor/F5.mp3", position: 100 },
  { name: "E5", frequency: 293.66, mp3: "saxTenor/E5.mp3", position: 90 },
  { name: "Eb5", frequency: 277.18, mp3: "saxTenor/D5di.mp3", position: 90 },
  { name: "D#5", frequency: 277.18, mp3: "saxTenor/D5di.mp3", position: 80 },
  { name: "D5", frequency: 261.63, mp3: "saxTenor/D5.mp3", position: 80 },
  { name: "Db5", frequency: 246.94, mp3: "saxTenor/C5di.mp3", position: 80 },
  { name: "C#5", frequency: 246.94, mp3: "saxTenor/C5di.mp3", position: 70 },
  { name: "C5", frequency: 233.08, mp3: "saxTenor/C5.mp3", position: 70 },
  { name: "H4", frequency: 220.00, mp3: "saxTenor/B4.mp3", position: 60 },
  { name: "B4", frequency: 207.65, mp3: "saxTenor/A4di.mp3", position: 60 },
  { name: "A#4", frequency: 207.65, mp3: "saxTenor/A4di.mp3", position: 50 },
  { name: "A4", frequency: 196.00, mp3: "saxTenor/A4.mp3", position: 50 },
  { name: "Ab4", frequency: 185.00, mp3: "saxTenor/G4di.mp3", position: 50 },
  { name: "G#4", frequency: 185.00, mp3: "saxTenor/G4di.mp3", position: 40 },
  { name: "G4", frequency: 174.61, mp3: "saxTenor/G4.mp3", position: 40 },
  { name: "Gb4", frequency: 164.81, mp3: "saxTenor/F4di.mp3", position: 40 },
  { name: "F#4", frequency: 164.81, mp3: "saxTenor/F4di.mp3", position: 30 },
  { name: "F4", frequency: 155.56, mp3: "saxTenor/F4.mp3", position: 30 },
  { name: "E4", frequency: 146.83, mp3: "saxTenor/E4.mp3", position: 20 },
  { name: "Eb4", frequency: 138.59, mp3: "saxTenor/D4di.mp3", position: 20 },
  { name: "D#4", frequency: 138.59, mp3: "saxTenor/D4di.mp3", position: 10 },
  { name: "D4", frequency: 130.81, mp3: "saxTenor/D4.mp3", position: 10 },
  { name: "Db4", frequency: 123.47, mp3: "saxTenor/C4di.mp3", position: 10 },
  { name: "C#4", frequency: 123.47, mp3: "saxTenor/C4di.mp3", position: 0 },
  { name: "C4", frequency: 116.54, mp3: "saxTenor/C4.mp3", position: 0 },
  { name: "H3", frequency: 110.00, mp3: "saxTenor/B3.mp3", position: -10 },
  { name: "B3", frequency: 103.83, mp3: "saxTenor/A3di.mp3", position: -10 },
  { name: "A#3", frequency: 103.83, mp3: "saxTenor/A3di.mp3", position: -20 },
  { name: "A3", frequency: 98.00, mp3: "saxTenor/A3.mp3", position: -20 },
  { name: "Ab3", frequency: 92.50, mp3: "saxTenor/G3di.mp3", position: -20 },
  { name: "G#3", frequency: 92.50, mp3: "saxTenor/G3di.mp3", position: -30 },
  { name: "G3", frequency: 87.31, mp3: "saxTenor/G3.mp3", position: -30 },
  { name: "Gb3", frequency: 82.41, mp3: "saxTenor/F3di.mp3", position: -30 },
  { name: "F#3", frequency: 82.41, mp3: "saxTenor/F3di.mp3", position: -40 },
  { name: "F3", frequency: 77.78, mp3: "saxTenor/F3.mp3", position: -40 },
  { name: "E3", frequency: 73.42, mp3: "saxTenor/E3.mp3", position: -50 },
  { name: "Eb3", frequency: 69.30, mp3: "saxTenor/D3di.mp3", position: -50 },
  { name: "D#3", frequency: 69.30, mp3: "saxTenor/D3di.mp3", position: -60 },
  { name: "D3", frequency: 65.41, mp3: "saxTenor/D3.mp3", position: -60 },
  { name: "Db3", frequency: 61.74, mp3: "saxTenor/C3di.mp3", position: -60 },
  { name: "C#3", frequency: 61.74, mp3: "saxTenor/C3di.mp3", position: -70 },
  { name: "C3", frequency: 58.27, mp3: "saxTenor/C3.mp3", position: -70 },
  { name: "H2", frequency: 55.00, mp3: "saxTenor/B2.mp3", position: -80 },
  { name: "B2", frequency: 51.91, mp3: "saxTenor/A2di.mp3", position: -80 },
  { name: "A#2", frequency: 51.91, mp3: "saxTenor/A2di.mp3", position: -90 },
  { name: "A2", frequency: 49.00, mp3: "saxTenor/A2.mp3", position: -90 },
  { name: "Ab2", frequency: 46.25, mp3: "saxTenor/G2di.mp3", position: -90 },
  { name: "G#2", frequency: 46.25, mp3: "saxTenor/G2di.mp3", position: -100 },
  { name: "G2", frequency: 43.65, mp3: "saxTenor/G2.mp3", position: -100 },
  { name: "Gb2", frequency: 41.20, mp3: "saxTenor/F2di.mp3", position: -100 },
  { name: "F#2", frequency: 41.20, mp3: "saxTenor/F2di.mp3", position: -110 },
  { name: "F2", frequency: 38.89, mp3: "saxTenor/F2.mp3", position: -110 },
  { name: "E2", frequency: 36.71, mp3: "saxTenor/E2.mp3", position: -120 },
  { name: "Eb2", frequency: 34.65, mp3: "saxTenor/D2di.mp3", position: -120 },
  { name: "D#2", frequency: 34.65, mp3: "saxTenor/D2di.mp3", position: -130 },
  { name: "D2", frequency: 32.70, mp3: "saxTenor/D2.mp3", position: -130 },
  { name: "Db2", frequency: 30.87, mp3: "saxTenor/C2di.mp3", position: -130 },
  { name: "C#2", frequency: 30.87, mp3: "saxTenor/C2di.mp3", position: -140 },
  { name: "C2", frequency: 29.14, mp3: "saxTenor/C2.mp3", position: -140 },
  { name: "H1", frequency: 27.50, mp3: "saxTenor/B1.mp3", position: -150 },
  { name: "B1", frequency: 25.96, mp3: "saxTenor/A1di.mp3", position: -150 },
  { name: "A#1", frequency: 25.96, mp3: "saxTenor/A1di.mp3", position: -160 },
  { name: "A1", frequency: 24.50, mp3: "saxTenor/A1.mp3", position: -160 },
  { name: "Ab1", frequency: 23.13, mp3: "saxTenor/G1di.mp3", position: -160 },
  { name: "G#1", frequency: 23.13, mp3: "saxTenor/G1di.mp3", position: -170 },
  { name: "G1", frequency: 21.83, mp3: "saxTenor/G1.mp3", position: -170 },
  { name: "Gb1", frequency: 20.60, mp3: "saxTenor/F1di.mp3", position: -170 },
  { name: "F#1", frequency: 20.60, mp3: "saxTenor/F1di.mp3", position: -180 },
  { name: "F1", frequency: 19.45, mp3: "saxTenor/F1.mp3", position: -180 },
  { name: "E1", frequency: 18.36, mp3: "saxTenor/E1.mp3", position: -190 },
  { name: "Eb1", frequency: 17.33, mp3: "saxTenor/D1di.mp3", position: -190 },
  { name: "D#1", frequency: 17.33, mp3: "saxTenor/D1di.mp3", position: -200 },
  { name: "D1", frequency: 16.35, mp3: "saxTenor/D1.mp3", position: -200 },
  { name: "Db1", frequency: 15.44, mp3: "saxTenor/C1di.mp3", position: -200 },
  { name: "C#1", frequency: 15.44, mp3: "saxTenor/C1di.mp3", position: -210 },
  { name: "C1", frequency: 14.57, mp3: "saxTenor/C1.mp3", position: -210 }
];