Option Explicit

Public Function SarussDet(ary As Variant) As Double

    Dim i As Integer, j As Integer, i1 As Integer, j1 As Integer, j2 As Integer
    Dim t As Integer, n As Integer
    Dim diaPlus As Double, diaMinus As Double
      
    n = ary.Length
    For i = 0 To n - 1
        diaPlus = 1
        diaMinus = 1
        For j = 0 To n - 1
            i1 = j
            t = j + i
            j1 = IIf(t > (n - 1), t - n, t)
            j2 = IIf((n - t) < 1, (2 * n) - t - 1, n - t - 1)
            diaPlus = diaPlus * ary(i1, j1)
            diaMinus = diaMinus * ary(i1, j2)
        Next
        SarussDet = SarussDet + diaPlus - diaMinus
    Next
            
End Function


