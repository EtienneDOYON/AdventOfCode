const instructionsList = "LRRRLLRLLRRLRLRRRLRLRRRLRRLLRRRLRRLRLLRLLRRLRLLLLRRLRRLRLLRRLRRRLLLRRLRLRRLRRRLRRRLLRLRRRLLRRLRRRLRRLRLRRLRRLLRLRLRRRLRRLRRLRRRLRRLRRLRLRRRLRRRLRRRLLLRLRRLRLRRRLRRRLRRLRRLLRLRRLLRRLLRLRRLRLRRLRRRLRLRRLRLRRRLLRRLLRLRRRLRRRLRRRLRRRLLLRLRRLRRRLRRRLRLLRRLLRRLRLRLLRRLRRLLRRRLRLRRRLRRRR";

const pathListUnparsed = [
    "RTF = (TRM, KNP)",
"FNJ = (DRR, MJH)",
"KNM = (CGF, LSP)",
"MDH = (CMN, VKC)",
"VKM = (FLM, SNG)",
"CMK = (JNV, PHR)",
"XJN = (GLC, SXG)",
"MGJ = (GCQ, XFC)",
"VKV = (DCV, QND)",
"HJR = (JMR, TKR)",
"QDR = (NNR, VBQ)",
"NGT = (QPS, JRL)",
"LNP = (XLG, HJN)",
"TRT = (CBR, BGZ)",
"QMP = (NTN, QPC)",
"LMV = (CGS, NGH)",
"FLV = (QMV, QNL)",
"RHV = (BGC, RTF)",
"SLD = (BSP, BNH)",
"SNK = (XCJ, QGG)",
"CPM = (RHJ, TKJ)",
"JGS = (XPM, FRL)",
"MFC = (DFM, HHP)",
"TDP = (FCD, RRJ)",
"JSS = (TQN, PTG)",
"XBD = (RTF, BGC)",
"NLH = (RBF, MKL)",
"MTV = (JCJ, BNV)",
"BSP = (RMB, GLP)",
"RBD = (MGM, RBG)",
"KGT = (BDQ, KBL)",
"SCC = (CXH, PJD)",
"SST = (HCP, HVM)",
"MVK = (JJL, LKV)",
"LLV = (KSH, TSN)",
"CDK = (TDR, GPN)",
"FQL = (HKL, DLZ)",
"XSQ = (NBX, VTC)",
"JGV = (HFL, PSV)",
"PCH = (FXX, QGP)",
"PMJ = (VHS, SMQ)",
"VTC = (CTB, HPS)",
"SPM = (XSD, FFP)",
"BCC = (XGG, VRC)",
"LPP = (SMD, SRF)",
"DDS = (XJN, NNQ)",
"HNH = (DXB, SPC)",
"CNH = (TCP, GCL)",
"XDP = (DPP, CPM)",
"VBX = (XJN, NNQ)",
"HCK = (NRF, LBG)",
"PXX = (HCX, PBL)",
"XKV = (HRB, HGC)",
"CHH = (RHT, KKX)",
"PPN = (NXV, PGP)",
"TKJ = (CSL, VSS)",
"HCP = (HDT, NVR)",
"JMM = (CTM, FXL)",
"XMF = (JVP, BBV)",
"QXD = (XHV, PGF)",
"KNP = (NNC, PHX)",
"NKR = (DTK, DLL)",
"RLJ = (NKB, QQM)",
"FKG = (KSG, RDQ)",
"VKF = (GQH, DJQ)",
"LKB = (FFP, XSD)",
"LGR = (FJT, KHV)",
"HJN = (DXT, VSG)",
"JJR = (GPN, TDR)",
"PKQ = (PBG, XSG)",
"VGT = (RRK, PJT)",
"GJR = (CTH, HML)",
"BKV = (HTL, XKH)",
"PGR = (SPV, LFG)",
"TKX = (FHJ, SJD)",
"RPF = (CML, XXS)",
"DGP = (BDQ, KBL)",
"PPX = (JXH, TKL)",
"VMJ = (HLL, FHX)",
"GDK = (SDR, TBL)",
"RXG = (NNX, JCB)",
"DLN = (RLJ, FPL)",
"MJH = (TXS, PXX)",
"QQD = (THQ, GJN)",
"NQS = (CBF, FQL)",
"SLK = (MLG, MGJ)",
"KVR = (GDB, VTQ)",
"DHC = (GVG, RTQ)",
"FLM = (TRK, NQM)",
"SPC = (RNS, BSB)",
"QMT = (LFB, BSX)",
"GCS = (LMB, QXS)",
"FVK = (TDP, XMK)",
"RTQ = (DSC, HDP)",
"PCG = (DKM, KDJ)",
"DKM = (PKV, RXG)",
"HCX = (MRM, GRM)",
"NLM = (XDX, KNM)",
"PKD = (LVC, QLT)",
"QPD = (MNT, ZZZ)",
"TSN = (RQF, BSG)",
"VLC = (TBH, BNQ)",
"VVD = (MTV, JVT)",
"GXD = (JMM, HSF)",
"TPT = (TLL, HFC)",
"MRM = (VTD, KVR)",
"TFF = (RPF, MSH)",
"PBJ = (BMM, LTG)",
"HGC = (VGT, TRG)",
"BFM = (CDL, KLQ)",
"TRM = (PHX, NNC)",
"CCN = (BGG, MVK)",
"FCK = (KBP, BRX)",
"GDM = (DQR, HRH)",
"PTG = (QDR, JRK)",
"SCN = (MRX, LNJ)",
"HSF = (FXL, CTM)",
"SQN = (HFS, KXS)",
"HCQ = (SCN, CPR)",
"FSK = (RVX, DGG)",
"VTQ = (CGD, QHG)",
"DPP = (RHJ, TKJ)",
"RRK = (BFN, QNH)",
"GTC = (GTP, KGJ)",
"FSN = (DRR, MJH)",
"GKC = (KQX, QSP)",
"CPN = (RVX, DGG)",
"KBL = (BVV, GJR)",
"CTM = (SLD, DRK)",
"LFR = (CHT, PCB)",
"SNG = (NQM, TRK)",
"KSG = (QFM, QCT)",
"DSV = (NKR, VMK)",
"GNB = (CPN, FSK)",
"HKD = (XBB, GFV)",
"NQM = (HNH, CCR)",
"NJS = (GVV, LPP)",
"DCG = (LCN, MGN)",
"SVN = (CBR, CBR)",
"FXX = (FNJ, FSN)",
"DFR = (GDK, RXK)",
"KMQ = (KXJ, LMV)",
"PHX = (QKS, KPF)",
"LKM = (QQD, VGN)",
"JSG = (LGD, VVD)",
"MGM = (BQJ, CTP)",
"PDF = (MJB, CPQ)",
"NGX = (MVS, PBJ)",
"QPC = (LJR, RGZ)",
"MRJ = (GJB, TJG)",
"PCR = (CVR, MSD)",
"SSF = (PFK, TKC)",
"RJP = (LSN, NJS)",
"QMS = (MVS, PBJ)",
"HCV = (LNP, BKR)",
"HXH = (MNT, MNT)",
"DJD = (MMQ, PLB)",
"PKV = (NNX, JCB)",
"LGX = (KBP, BRX)",
"GHT = (XSQ, HSD)",
"BGG = (JJL, LKV)",
"NRF = (SSK, NTV)",
"QSV = (PPV, VJB)",
"LHP = (PTG, TQN)",
"VGN = (GJN, THQ)",
"PBH = (GXD, NNB)",
"MMJ = (JKS, CMK)",
"XVC = (LLV, GRL)",
"RST = (SJS, BRN)",
"BDQ = (BVV, GJR)",
"HVM = (HDT, NVR)",
"DGK = (NGN, VDN)",
"GQN = (KSG, RDQ)",
"MKL = (DCG, QDT)",
"BFL = (MMQ, PLB)",
"MSD = (DNM, MCC)",
"DFM = (NSC, FLV)",
"DJQ = (CBS, VHP)",
"RJD = (MGF, SCR)",
"XQK = (VBX, DDS)",
"PGP = (KGT, DGP)",
"TKL = (LKM, MGV)",
"RVX = (PKD, MNK)",
"GJB = (HDG, XTV)",
"HFG = (RJP, VXB)",
"BSG = (HXH, QPD)",
"KXS = (MKC, CDM)",
"QKV = (XMF, CJX)",
"XKJ = (XQK, RDH)",
"VHS = (SNK, PHP)",
"GRM = (KVR, VTD)",
"GLC = (KJM, QHK)",
"KHC = (LMV, KXJ)",
"NTN = (LJR, LJR)",
"BFN = (BCC, GPK)",
"HML = (RLX, MDH)",
"BTD = (HHQ, XTH)",
"DRR = (PXX, TXS)",
"BBP = (SVN, TRT)",
"FHX = (VRK, JQL)",
"JXH = (LKM, MGV)",
"DNF = (HFS, KXS)",
"MNT = (DCX, FDP)",
"MSH = (XXS, CML)",
"BNV = (JPL, MPG)",
"KGJ = (NSL, QQC)",
"BKR = (HJN, XLG)",
"KJG = (LTM, RNL)",
"QGG = (QDQ, HVT)",
"MNK = (LVC, QLT)",
"NNB = (HSF, JMM)",
"XBF = (GQH, DJQ)",
"GQH = (VHP, CBS)",
"KJM = (FGM, DML)",
"MRX = (BFM, VTN)",
"CPR = (MRX, LNJ)",
"LRP = (MCX, LSD)",
"QHL = (VLP, VLP)",
"VKC = (TGM, DNT)",
"FRN = (LGX, FCK)",
"MRR = (PCG, GTG)",
"QTT = (NRJ, CKC)",
"XVK = (QRQ, MRJ)",
"SJD = (BGN, XKR)",
"CKT = (KPH, MRR)",
"HFB = (JKS, CMK)",
"MJB = (RSX, XVC)",
"HSD = (NBX, VTC)",
"HHQ = (VPR, TNF)",
"KQT = (FHX, HLL)",
"BMX = (GQP, VKM)",
"BKK = (CNH, FNN)",
"CXV = (XMF, CJX)",
"BRX = (FQJ, QMT)",
"MQV = (NRJ, CKC)",
"QBR = (QSV, MTB)",
"CDL = (JHM, QXD)",
"XTH = (VPR, TNF)",
"BBJ = (FJT, KHV)",
"CXS = (MGF, SCR)",
"HBL = (XKB, XKJ)",
"PHT = (BDS, KHF)",
"RJR = (QLS, HCK)",
"THQ = (GCS, GXV)",
"QNB = (BBJ, LGR)",
"XFC = (CFP, XDP)",
"BMM = (DQF, TGS)",
"NVR = (QNB, HVX)",
"QHG = (XRB, DPB)",
"HFS = (MKC, CDM)",
"LCK = (HXR, QPF)",
"GHF = (NQP, RBD)",
"XPM = (RVC, QSX)",
"CFP = (CPM, DPP)",
"GJC = (PPN, FMR)",
"QFM = (XCR, PPX)",
"XCF = (QKV, CXV)",
"TTX = (HTC, HTC)",
"XLG = (DXT, VSG)",
"QNH = (GPK, BCC)",
"FHJ = (XKR, BGN)",
"SPV = (RVF, DFR)",
"FNN = (GCL, TCP)",
"SXG = (QHK, KJM)",
"TSD = (QBR, MLV)",
"PFV = (KXK, NQX)",
"LKS = (LKB, SPM)",
"DQF = (XKV, QKR)",
"HHT = (LHP, JSS)",
"NSH = (MBK, PRM)",
"SRF = (GDM, CPD)",
"BDS = (GDN, RJB)",
"KQX = (HVS, JGS)",
"JHM = (XHV, PGF)",
"KXF = (LNP, BKR)",
"KRB = (MHM, NDN)",
"FHR = (JRL, QPS)",
"GJN = (GCS, GXV)",
"QLT = (DFK, NGQ)",
"GTP = (NSL, QQC)",
"NCM = (PMJ, QTF)",
"JVP = (NVX, KKM)",
"JRK = (NNR, VBQ)",
"CBR = (QGX, QDB)",
"SJS = (PGG, PGG)",
"DML = (NMJ, TKX)",
"GPN = (JDL, DHV)",
"HKL = (FHR, NGT)",
"CVN = (FXX, QGP)",
"TBH = (GJC, SGC)",
"VTM = (LFR, NTZ)",
"JFC = (VVD, LGD)",
"BSB = (VLC, GML)",
"MGV = (QQD, VGN)",
"PGG = (TRJ, TRJ)",
"LGD = (JVT, MTV)",
"TKC = (BFB, QCD)",
"CPX = (HXC, MBP)",
"JGD = (LHP, JSS)",
"CBS = (VVJ, FQR)",
"KMB = (HCK, QLS)",
"VBT = (CXJ, PHT)",
"VPR = (JFC, JSG)",
"TKR = (MVD, HFG)",
"RXK = (SDR, TBL)",
"DRK = (BNH, BSP)",
"SCR = (PCR, SXP)",
"DMN = (VDN, NGN)",
"KTA = (FHR, NGT)",
"PHP = (XCJ, QGG)",
"KPF = (TPV, VBM)",
"MGQ = (DCV, QND)",
"LSN = (GVV, LPP)",
"KPM = (BDK, GTC)",
"QMM = (DJD, BFL)",
"DXT = (PGR, BMQ)",
"MKX = (PKQ, BCN)",
"BFB = (QMM, TXJ)",
"GFD = (LSD, MCX)",
"PFK = (QCD, BFB)",
"LTM = (DLV, DCC)",
"SSK = (SRG, NSB)",
"LHC = (TDJ, FPQ)",
"LFG = (DFR, RVF)",
"RBH = (VKM, GQP)",
"GDN = (DMN, DGK)",
"GTG = (DKM, KDJ)",
"BVK = (KVJ, KGP)",
"QMQ = (TRJ, HMF)",
"NNQ = (GLC, SXG)",
"XTJ = (MXN, MDT)",
"MCP = (HFL, PSV)",
"HTC = (LFR, LFR)",
"DLV = (KRB, KBJ)",
"RBG = (CTP, BQJ)",
"CDD = (XKB, XKJ)",
"RBF = (QDT, DCG)",
"VJL = (MRR, KPH)",
"HRH = (CQC, NSH)",
"FNG = (XBD, RHV)",
"QGM = (FKG, GQN)",
"BDK = (KGJ, GTP)",
"HDG = (DPD, GVF)",
"GFP = (XKH, HTL)",
"NDJ = (CPX, LCR)",
"NGN = (CKT, VJL)",
"QRQ = (TJG, GJB)",
"VSS = (TLF, MKX)",
"DHV = (BKV, GFP)",
"QXS = (MBN, MKK)",
"NBX = (HPS, CTB)",
"LXB = (NCM, RRR)",
"GQL = (GKC, GCC)",
"JCB = (RSG, PDF)",
"JRL = (QMN, NKD)",
"PBL = (MRM, GRM)",
"KHF = (GDN, RJB)",
"MPG = (GFQ, MFC)",
"VTN = (KLQ, CDL)",
"CSN = (HQG, HQG)",
"KSH = (RQF, RQF)",
"BGQ = (CCG, NLH)",
"GVV = (SRF, SMD)",
"JJL = (QMS, NGX)",
"HBT = (CGH, RQJ)",
"RSX = (LLV, GRL)",
"CTH = (RLX, MDH)",
"CXH = (GRV, RLB)",
"QKR = (HGC, HRB)",
"TDR = (DHV, JDL)",
"TBL = (DNF, SQN)",
"BMQ = (SPV, LFG)",
"MVX = (XQS, MKV)",
"RNL = (DLV, DCC)",
"CCG = (RBF, MKL)",
"TRJ = (FLG, FLG)",
"XFP = (NLL, BTD)",
"CHT = (NCJ, BGQ)",
"KMK = (CXV, QKV)",
"MVS = (BMM, LTG)",
"PNM = (HTC, VTM)",
"BSX = (HJR, PXV)",
"RSV = (BTD, NLL)",
"QHK = (FGM, DML)",
"QNG = (RQP, QHB)",
"XRX = (KXF, HCV)",
"DPD = (PCD, GHT)",
"KXJ = (CGS, NGH)",
"VTD = (GDB, VTQ)",
"QND = (BVJ, HKD)",
"VBQ = (PBH, SBT)",
"SGC = (FMR, PPN)",
"NTZ = (PCB, CHT)",
"DQR = (NSH, CQC)",
"KVJ = (SCC, JCN)",
"SXP = (CVR, MSD)",
"RQP = (NNF, DRD)",
"CJX = (JVP, BBV)",
"RQJ = (XCF, KMK)",
"PGF = (SGX, DHC)",
"JLM = (XQS, MKV)",
"KBB = (BML, NSJ)",
"PMD = (HCQ, RQS)",
"VDN = (VJL, CKT)",
"LCR = (HXC, MBP)",
"GFV = (LRP, GFD)",
"PLA = (GFS, XPP)",
"FPQ = (JLD, CJJ)",
"KBP = (FQJ, QMT)",
"BBV = (NVX, KKM)",
"DSC = (RTV, KMV)",
"KKX = (VKF, XBF)",
"MDT = (RQQ, RST)",
"PJT = (QNH, BFN)",
"MGX = (HXR, QPF)",
"RHT = (XBF, VKF)",
"DLZ = (NGT, FHR)",
"RRJ = (JLM, MVX)",
"SXV = (QRQ, MRJ)",
"BJX = (FMC, LXB)",
"CJJ = (GHF, GXQ)",
"HQR = (TTX, TTX)",
"QHB = (NNF, DRD)",
"RGZ = (XPP, GFS)",
"TCP = (CXS, RJD)",
"KRJ = (MLV, QBR)",
"HXC = (NLG, KBB)",
"MGN = (GNB, FCS)",
"GXQ = (RBD, NQP)",
"GPK = (XGG, VRC)",
"LQD = (CVN, PCH)",
"MJV = (VLP, QMP)",
"LNJ = (VTN, BFM)",
"QSX = (FMQ, QNG)",
"GRL = (KSH, TSN)",
"VJB = (HHT, JGD)",
"QGP = (FSN, FNJ)",
"TXT = (PCH, CVN)",
"CML = (TSV, GQL)",
"FQJ = (LFB, BSX)",
"PHR = (LVG, BNJ)",
"PMX = (KXF, HCV)",
"FRL = (QSX, RVC)",
"HDP = (KMV, RTV)",
"SBT = (NNB, GXD)",
"QLS = (NRF, LBG)",
"RDH = (DDS, VBX)",
"TPV = (VHH, KJG)",
"KBJ = (NDN, MHM)",
"MCX = (LCK, MGX)",
"PPT = (XBD, RHV)",
"QMN = (XRX, PMX)",
"DCC = (KBJ, KRB)",
"KPC = (XDX, KNM)",
"MFM = (VRL, MHV)",
"CGD = (DPB, XRB)",
"CGS = (KJF, KPM)",
"XCJ = (QDQ, HVT)",
"XGG = (MCP, JGV)",
"QGX = (VTS, BJX)",
"QSP = (JGS, HVS)",
"RQS = (CPR, SCN)",
"NSJ = (RBK, TPT)",
"DGG = (MNK, PKD)",
"MLG = (GCQ, XFC)",
"BML = (TPT, RBK)",
"KHV = (TSH, BKK)",
"BQJ = (XVK, SXV)",
"GCC = (KQX, QSP)",
"VMK = (DLL, DTK)",
"FMR = (NXV, PGP)",
"GVF = (PCD, GHT)",
"HLL = (JQL, VRK)",
"PCB = (NCJ, BGQ)",
"TSV = (GKC, GCC)",
"GLP = (CCN, LMC)",
"CDM = (NHJ, QGM)",
"MDJ = (KGP, KVJ)",
"LSD = (LCK, MGX)",
"MXN = (RQQ, RST)",
"DFK = (VMJ, KQT)",
"BGN = (BVK, MDJ)",
"LJR = (GFS, XPP)",
"RHJ = (VSS, CSL)",
"VRK = (FRN, LRR)",
"CGF = (RBH, BMX)",
"DLL = (CKP, KMN)",
"LVC = (NGQ, DFK)",
"MVD = (RJP, VXB)",
"TTG = (NKR, VMK)",
"RCV = (RQS, HCQ)",
"NQP = (MGM, RBG)",
"HNT = (FPL, RLJ)",
"JCJ = (JPL, MPG)",
"VHJ = (CDD, HBL)",
"HFL = (QHL, MJV)",
"XMK = (RRJ, FCD)",
"NHJ = (FKG, GQN)",
"VTS = (LXB, FMC)",
"FGM = (NMJ, TKX)",
"JLD = (GHF, GXQ)",
"NSL = (LQD, TXT)",
"HHL = (LKB, SPM)",
"JPL = (GFQ, MFC)",
"XRB = (HBT, KRM)",
"MNM = (MHV, VRL)",
"CCR = (DXB, SPC)",
"CPQ = (RSX, XVC)",
"QQM = (TFL, RJV)",
"XXK = (SLK, JST)",
"LBT = (CBF, CBF)",
"XKR = (MDJ, BVK)",
"QMV = (QTT, MQV)",
"CTP = (SXV, XVK)",
"NVX = (HQR, TNP)",
"HQG = (SVN, SVN)",
"XCR = (JXH, TKL)",
"PJD = (GRV, RLB)",
"CGH = (XCF, KMK)",
"VRC = (MCP, JGV)",
"GCQ = (XDP, CFP)",
"DCV = (BVJ, HKD)",
"SRG = (PSK, QLV)",
"BGC = (KNP, TRM)",
"TDJ = (JLD, CJJ)",
"FBH = (NQX, KXK)",
"TRK = (CCR, HNH)",
"RRR = (PMJ, QTF)",
"LJA = (QGX, QDB)",
"KJF = (GTC, BDK)",
"FFP = (JDS, FVK)",
"GML = (TBH, BNQ)",
"KGP = (JCN, SCC)",
"JMR = (HFG, MVD)",
"MBP = (KBB, NLG)",
"CBF = (HKL, HKL)",
"FDP = (CDK, JJR)",
"SDR = (SQN, DNF)",
"VXB = (LSN, NJS)",
"JDL = (GFP, BKV)",
"XHV = (DHC, SGX)",
"LRR = (FCK, LGX)",
"VVJ = (XTJ, KKJ)",
"HXR = (BGT, LFH)",
"HDT = (QNB, HVX)",
"SMQ = (PHP, SNK)",
"KDJ = (PKV, RXG)",
"GFS = (NDJ, SCX)",
"QQC = (TXT, LQD)",
"QCD = (TXJ, QMM)",
"NGQ = (KQT, VMJ)",
"PRM = (KMQ, KHC)",
"NCJ = (NLH, CCG)",
"FJT = (BKK, TSH)",
"LMB = (MBN, MKK)",
"XQS = (SST, VBD)",
"MGF = (PCR, SXP)",
"TJG = (HDG, XTV)",
"SGX = (GVG, RTQ)",
"CKC = (CSN, JXD)",
"JVT = (JCJ, BNV)",
"QDQ = (PFV, FBH)",
"FQR = (KKJ, XTJ)",
"NXV = (DGP, KGT)",
"BCN = (PBG, XSG)",
"DRD = (LHC, TRB)",
"JDS = (TDP, XMK)",
"MKC = (QGM, NHJ)",
"JST = (MLG, MGJ)",
"TRG = (RRK, PJT)",
"JCN = (PJD, CXH)",
"PXV = (JMR, TKR)",
"MCC = (LBT, NQS)",
"RBK = (HFC, TLL)",
"CKP = (BRH, CHH)",
"BVJ = (XBB, GFV)",
"HRB = (TRG, VGT)",
"NNF = (TRB, LHC)",
"DXB = (RNS, BSB)",
"VBM = (KJG, VHH)",
"PPV = (JGD, HHT)",
"MHV = (TSD, KRJ)",
"BNH = (GLP, RMB)",
"NLG = (NSJ, BML)",
"LBG = (SSK, NTV)",
"NMJ = (SJD, FHJ)",
"PSK = (XCD, SSF)",
"CSL = (MKX, TLF)",
"MKK = (LKS, HHL)",
"VBD = (HVM, HCP)",
"NNX = (RSG, PDF)",
"HGT = (RCV, PMD)",
"PLB = (RSV, XFP)",
"KXK = (VKV, MGQ)",
"MHM = (KFR, CNM)",
"AAA = (DCX, FDP)",
"RMB = (CCN, LMC)",
"BGT = (BBF, TFF)",
"DNT = (RNT, XXK)",
"GVG = (HDP, DSC)",
"MKV = (VBD, SST)",
"HFC = (MMJ, HFB)",
"NDN = (KFR, CNM)",
"RVC = (FMQ, QNG)",
"JNV = (BNJ, LVG)",
"TRB = (FPQ, TDJ)",
"XDX = (LSP, CGF)",
"RJB = (DMN, DGK)",
"CPD = (DQR, HRH)",
"NRJ = (CSN, JXD)",
"XXS = (TSV, GQL)",
"FCD = (JLM, MVX)",
"BNQ = (GJC, SGC)",
"TNP = (TTX, PNM)",
"NSB = (QLV, PSK)",
"HVX = (BBJ, LGR)",
"JQL = (LRR, FRN)",
"GXV = (LMB, QXS)",
"HBZ = (PPT, FNG)",
"NNR = (PBH, SBT)",
"CTB = (RJR, KMB)",
"HTL = (KPC, NLM)",
"RLX = (VKC, CMN)",
"NGH = (KPM, KJF)",
"SMD = (CPD, GDM)",
"LKV = (QMS, NGX)",
"DCX = (JJR, CDK)",
"TNF = (JFC, JSG)",
"XTV = (GVF, DPD)",
"LVG = (DLN, HNT)",
"CVR = (DNM, MCC)",
"JXA = (CHT, PCB)",
"DPB = (HBT, KRM)",
"LFH = (BBF, TFF)",
"VHH = (RNL, LTM)",
"DNM = (LBT, LBT)",
"JXD = (HQG, BBP)",
"RNS = (GML, VLC)",
"KKJ = (MDT, MXN)",
"NFA = (FNG, PPT)",
"XBB = (GFD, LRP)",
"HMF = (FLG, HBZ)",
"LTG = (TGS, DQF)",
"HHP = (NSC, FLV)",
"GFQ = (HHP, DFM)",
"XCD = (TKC, PFK)",
"FXL = (SLD, DRK)",
"LMC = (BGG, MVK)",
"XXL = (PHT, CXJ)",
"FPL = (NKB, QQM)",
"LFB = (PXV, HJR)",
"MBN = (LKS, HHL)",
"QKB = (HBL, CDD)",
"RJV = (VHJ, QKB)",
"KMV = (DSV, TTG)",
"QPF = (BGT, LFH)",
"TFL = (VHJ, QKB)",
"SCX = (CPX, LCR)",
"BRH = (KKX, RHT)",
"XKH = (KPC, NLM)",
"FCS = (CPN, FSK)",
"FMQ = (QHB, RQP)",
"GRV = (MFM, MNM)",
"QPS = (NKD, QMN)",
"NTV = (NSB, SRG)",
"NLL = (XTH, HHQ)",
"QDT = (LCN, MGN)",
"RTV = (DSV, TTG)",
"RLB = (MNM, MFM)",
"QKS = (VBM, TPV)",
"QCT = (XCR, PPX)",
"KMN = (BRH, CHH)",
"TLF = (BCN, PKQ)",
"JKS = (JNV, PHR)",
"PBG = (VBT, XXL)",
"NQX = (VKV, MGQ)",
"FLG = (FNG, PPT)",
"RNT = (SLK, JST)",
"BNJ = (DLN, HNT)",
"QLV = (SSF, XCD)",
"FMC = (RRR, NCM)",
"BRN = (PGG, QMQ)",
"MBK = (KMQ, KHC)",
"TXJ = (DJD, BFL)",
"LCN = (FCS, GNB)",
"TLL = (MMJ, HFB)",
"GDB = (QHG, CGD)",
"XSD = (JDS, FVK)",
"BBF = (RPF, MSH)",
"NSC = (QNL, QMV)",
"GQP = (FLM, SNG)",
"LSP = (BMX, RBH)",
"KPH = (PCG, GTG)",
"XPP = (SCX, NDJ)",
"QNL = (MQV, QTT)",
"TSH = (FNN, CNH)",
"MMQ = (RSV, XFP)",
"XSG = (XXL, VBT)",
"GCL = (RJD, CXS)",
"XHD = (RCV, PMD)",
"TXS = (HCX, PBL)",
"RSG = (CPQ, MJB)",
"CXJ = (KHF, BDS)",
"BGZ = (QDB, QGX)",
"MTB = (VJB, PPV)",
"MLV = (QSV, MTB)",
"NKB = (RJV, TFL)",
"QDB = (VTS, BJX)",
"KLQ = (QXD, JHM)",
"HPS = (RJR, KMB)",
"TQN = (JRK, QDR)",
"VHP = (FQR, VVJ)",
"VRL = (TSD, KRJ)",
"RDQ = (QCT, QFM)",
"BVV = (HML, CTH)",
"QTF = (VHS, SMQ)",
"CMN = (TGM, DNT)",
"TGM = (XXK, RNT)",
"HVS = (FRL, XPM)",
"NKD = (XRX, PMX)",
"VLP = (NTN, NTN)",
"CNM = (HGT, XHD)",
"PSV = (QHL, MJV)",
"RQF = (HXH, HXH)",
"HVT = (FBH, PFV)",
"RVF = (GDK, RXK)",
"PCD = (HSD, XSQ)",
"ZZZ = (FDP, DCX)",
"KKM = (HQR, TNP)",
"KRM = (CGH, RQJ)",
"VSG = (PGR, BMQ)",
"KFR = (HGT, XHD)",
"RQQ = (SJS, BRN)",
"NNC = (QKS, KPF)",
"CQC = (MBK, PRM)",
"XKB = (RDH, XQK)",
"TGS = (XKV, QKR)",
"DTK = (CKP, KMN)",
];

const pathList = {};
let currentPaths = [];

pathListUnparsed.map((path) => {
    const splitPath = path.split(' = (');

    const destinations = splitPath[1].split(', ');

    pathList[splitPath[0]] = {
        currentPath: splitPath[0],
        L: destinations[0],
        R: destinations[1].substring(0, destinations[1].length - 1),
    };

    if (splitPath[0][2] === 'A') {
        currentPaths.push(splitPath[0]);
    }
});

let stepAmount = 0;
let isArrived = false;
let loopOfPath = {};
let absic = {};

let it = -1;

console.log(currentPaths);

while (++it < currentPaths.length) {
    const currentlyConsidered = currentPaths[it];
    loopOfPath[currentlyConsidered] = [];

    let arrived = false;
    let steps = 0;
    let currentPos = currentlyConsidered;

    while (arrived == false) {
        currentPos = pathList[currentPos][instructionsList[steps % instructionsList.length]];

        if (absic[currentlyConsidered] === undefined && currentPos[2] === 'Z') {
            absic[currentlyConsidered] = steps + 1;
        }

        if (loopOfPath[currentlyConsidered].find((el) => el === (currentPos + '-' + (steps % instructionsList.length))) != undefined) {
            arrived = true;
        }

        loopOfPath[currentlyConsidered].push((currentPos + '-' + (steps % instructionsList.length)));        
        steps++;
    }

    console.log('Path parsed');
}

for (const [pathName, pathLoop] of Object.entries(loopOfPath)) {
    console.log(' ================= >>>>>   ', pathName, '    <<<<< =================\n');
    console.log(absic[pathName]);
    console.log('\n');
}

// Je met ici en commentaire car j'ai eu la flemme de faire le code pour calculer ça
// Il nous faut le PPCM de tous nos absic[pathName]
// J'ai utilisé : https://calculis.net/ppcm#3
// Bon courage a vous :D
