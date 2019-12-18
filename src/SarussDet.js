function Det(ary) {
            var i = 0,
                j = 0,
                i1 = 0,
                j1 = 0,
                j2 = 0,
                t = 0,
                n = 0,
                ans = parseFloat(0),
                diaPlus = parseFloat(1),
                diaMinus = parseFloat(1);
            n = ary.length;
            for (i = 0; i < n; i++) {
                diaPlus = 1;
                diaMinus = 1;
                for (j = 0; j < n; j++) {
                    i1 = j;
                    t = j + i;
                    j1 = ((t > (n - 1)) ? (t - n) : t);
                    j2 = (((n - t) < 1) ? (2 * n - t - 1) : (n - t - 1));
                    diaPlus = diaPlus * ary[i1][j1];
                    diaMinus = diaMinus * ary[i1][j2];
                }
                ans = ans + diaPlus - diaMinus;
            }
            return ans;
        }
