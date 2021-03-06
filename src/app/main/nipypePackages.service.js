(function () {
  'use strict';

  angular
    .module('workflowEditor')
    .service('nipypePackages', nipypePackages);

  function nipypePackages() {
    var packages = {
      "interfaces": {
        "afni.base.AFNICommand": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.base",
          "name": "AFNICommand",
          "outputs": {},
          "type": null
        },
        "afni.preprocess.AFNItoNIFTI": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "AFNItoNIFTI",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Allineate": {
          "inputs": {
            "args": null,
            "autobox": null,
            "automask": null,
            "autoweight": null,
            "center_of_mass": null,
            "check": null,
            "convergence": null,
            "cost": null,
            "environ": {},
            "epi": null,
            "final_interpolation": null,
            "fine_blur": null,
            "ignore_exception": false,
            "in_file": null,
            "in_matrix": null,
            "in_param_file": null,
            "interpolation": null,
            "master": null,
            "newgrid": null,
            "nmatch": null,
            "no_pad": null,
            "nomask": null,
            "nwarp": null,
            "nwarp_fixdep": null,
            "nwarp_fixmot": null,
            "one_pass": null,
            "out_file": null,
            "out_matrix": null,
            "out_param_file": null,
            "out_weight_file": null,
            "outputtype": null,
            "reference": null,
            "replacebase": null,
            "replacemeth": null,
            "source_automask": null,
            "source_mask": null,
            "terminal_output": null,
            "two_best": null,
            "two_blur": null,
            "two_first": null,
            "two_pass": null,
            "usetemp": null,
            "warp_type": null,
            "warpfreeze": null,
            "weight_file": null,
            "zclip": null
          },
          "module": "afni.preprocess",
          "name": "Allineate",
          "outputs": {
            "matrix": null,
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.AutoTcorrelate": {
          "inputs": {
            "args": null,
            "environ": {},
            "eta2": null,
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "mask_only_targets": null,
            "mask_source": null,
            "out_file": null,
            "outputtype": null,
            "polort": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "AutoTcorrelate",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Autobox": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "no_clustering": null,
            "out_file": null,
            "outputtype": null,
            "padding": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Autobox",
          "outputs": {
            "out_file": null,
            "x_max": null,
            "x_min": null,
            "y_max": null,
            "y_min": null,
            "z_max": null,
            "z_min": null
          },
          "type": null
        },
        "afni.preprocess.Automask": {
          "inputs": {
            "args": null,
            "brain_file": null,
            "clfrac": null,
            "dilate": null,
            "environ": {},
            "erode": null,
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Automask",
          "outputs": {
            "brain_file": null,
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Bandpass": {
          "inputs": {
            "args": null,
            "automask": null,
            "blur": null,
            "despike": null,
            "environ": {},
            "highpass": null,
            "ignore_exception": false,
            "in_file": null,
            "localPV": null,
            "lowpass": null,
            "mask": null,
            "nfft": null,
            "no_detrend": null,
            "normalize": null,
            "notrans": null,
            "orthogonalize_dset": null,
            "orthogonalize_file": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null,
            "tr": null
          },
          "module": "afni.preprocess",
          "name": "Bandpass",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.BlurInMask": {
          "inputs": {
            "args": null,
            "automask": null,
            "environ": {},
            "float_out": null,
            "fwhm": null,
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "multimask": null,
            "options": null,
            "out_file": null,
            "outputtype": null,
            "preserve": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "BlurInMask",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.BrickStat": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "min": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "BrickStat",
          "outputs": {
            "min_val": null
          },
          "type": null
        },
        "afni.preprocess.Calc": {
          "inputs": {
            "args": null,
            "environ": {},
            "expr": null,
            "ignore_exception": false,
            "in_file_a": null,
            "in_file_b": null,
            "in_file_c": null,
            "other": null,
            "out_file": null,
            "outputtype": null,
            "single_idx": null,
            "start_idx": null,
            "stop_idx": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Calc",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Copy": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Copy",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Despike": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Despike",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Detrend": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Detrend",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Eval": {
          "inputs": {
            "args": null,
            "environ": {},
            "expr": null,
            "ignore_exception": false,
            "in_file_a": null,
            "in_file_b": null,
            "in_file_c": null,
            "other": null,
            "out1D": null,
            "out_file": null,
            "outputtype": null,
            "single_idx": null,
            "start_idx": null,
            "stop_idx": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Eval",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Fim": {
          "inputs": {
            "args": null,
            "environ": {},
            "fim_thr": null,
            "ideal_file": null,
            "ignore_exception": false,
            "in_file": null,
            "out": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Fim",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Fourier": {
          "inputs": {
            "args": null,
            "environ": {},
            "highpass": null,
            "ignore_exception": false,
            "in_file": null,
            "lowpass": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Fourier",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Maskave": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "out_file": null,
            "outputtype": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Maskave",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Means": {
          "inputs": {
            "args": null,
            "count": null,
            "environ": {},
            "ignore_exception": false,
            "in_file_a": null,
            "in_file_b": null,
            "mask_inter": null,
            "mask_union": null,
            "non_zero": null,
            "out_file": null,
            "outputtype": null,
            "scale": null,
            "sqr": null,
            "std_dev": null,
            "summ": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Means",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Merge": {
          "inputs": {
            "args": null,
            "blurfwhm": null,
            "doall": null,
            "environ": {},
            "ignore_exception": false,
            "in_files": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "Merge",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.ROIStats": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "mask_f2short": null,
            "quiet": null,
            "terminal_output": "allatonce"
          },
          "module": "afni.preprocess",
          "name": "ROIStats",
          "outputs": {
            "stats": null
          },
          "type": null
        },
        "afni.preprocess.Refit": {
          "inputs": {
            "args": null,
            "deoblique": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "space": null,
            "terminal_output": null,
            "xdel": null,
            "xorigin": null,
            "ydel": null,
            "yorigin": null,
            "zdel": null,
            "zorigin": null
          },
          "module": "afni.preprocess",
          "name": "Refit",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Resample": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "master": null,
            "orientation": null,
            "out_file": null,
            "outputtype": null,
            "resample_mode": null,
            "terminal_output": null,
            "voxel_size": null
          },
          "module": "afni.preprocess",
          "name": "Resample",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Retroicor": {
          "inputs": {
            "args": null,
            "card": null,
            "cardphase": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "order": null,
            "out_file": null,
            "outputtype": null,
            "resp": null,
            "respphase": null,
            "terminal_output": null,
            "threshold": null
          },
          "module": "afni.preprocess",
          "name": "Retroicor",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.SkullStrip": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "SkullStrip",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.TCat": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_files": null,
            "out_file": null,
            "outputtype": null,
            "rlt": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "TCat",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.TCorr1D": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "ktaub": null,
            "out_file": null,
            "outputtype": null,
            "pearson": null,
            "quadrant": null,
            "spearman": null,
            "terminal_output": null,
            "xset": null,
            "y_1d": null
          },
          "module": "afni.preprocess",
          "name": "TCorr1D",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.TCorrMap": {
          "inputs": {
            "absolute_threshold": null,
            "args": null,
            "automask": null,
            "average_expr": null,
            "average_expr_nonzero": null,
            "bandpass": null,
            "blur_fwhm": null,
            "correlation_maps": null,
            "correlation_maps_masked": null,
            "environ": {},
            "expr": null,
            "histogram": null,
            "histogram_bin_numbers": null,
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "mean_file": null,
            "out_file": null,
            "outputtype": null,
            "pmean": null,
            "polort": null,
            "qmean": null,
            "regress_out_timeseries": null,
            "seeds": null,
            "seeds_width": null,
            "sum_expr": null,
            "terminal_output": null,
            "thresholds": null,
            "var_absolute_threshold": null,
            "var_absolute_threshold_normalize": null,
            "zmean": null
          },
          "module": "afni.preprocess",
          "name": "TCorrMap",
          "outputs": {
            "absolute_threshold": null,
            "average_expr": null,
            "average_expr_nonzero": null,
            "correlation_maps": null,
            "correlation_maps_masked": null,
            "histogram": null,
            "mean_file": null,
            "pmean": null,
            "qmean": null,
            "sum_expr": null,
            "var_absolute_threshold": null,
            "var_absolute_threshold_normalize": null,
            "zmean": null
          },
          "type": null
        },
        "afni.preprocess.TCorrelate": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "out_file": null,
            "outputtype": null,
            "pearson": null,
            "polort": null,
            "terminal_output": null,
            "xset": null,
            "yset": null
          },
          "module": "afni.preprocess",
          "name": "TCorrelate",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.TShift": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore": null,
            "ignore_exception": false,
            "in_file": null,
            "interp": null,
            "out_file": null,
            "outputtype": null,
            "rlt": null,
            "rltplus": null,
            "terminal_output": null,
            "tpattern": null,
            "tr": null,
            "tslice": null,
            "tzero": null
          },
          "module": "afni.preprocess",
          "name": "TShift",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.TStat": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "options": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "TStat",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.To3D": {
          "inputs": {
            "args": null,
            "assumemosaic": null,
            "datatype": null,
            "environ": {},
            "filetype": null,
            "funcparams": null,
            "ignore_exception": false,
            "in_folder": null,
            "out_file": null,
            "outputtype": null,
            "skipoutliers": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "To3D",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Volreg": {
          "inputs": {
            "args": null,
            "basefile": null,
            "copyorigin": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "md1d_file": null,
            "oned_file": null,
            "oned_matrix_save": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null,
            "timeshift": null,
            "verbose": null,
            "zpad": null
          },
          "module": "afni.preprocess",
          "name": "Volreg",
          "outputs": {
            "md1d_file": null,
            "oned_file": null,
            "oned_matrix_save": null,
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.Warp": {
          "inputs": {
            "args": null,
            "deoblique": null,
            "environ": {},
            "gridset": null,
            "ignore_exception": false,
            "in_file": null,
            "interp": null,
            "matparent": null,
            "mni2tta": null,
            "newgrid": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null,
            "tta2mni": null,
            "zpad": null
          },
          "module": "afni.preprocess",
          "name": "Warp",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.preprocess.ZCutUp": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "keep": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null
          },
          "module": "afni.preprocess",
          "name": "ZCutUp",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.svm.SVMTest": {
          "inputs": {
            "args": null,
            "classout": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "model": null,
            "multiclass": null,
            "nodetrend": null,
            "nopredcensord": null,
            "options": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null,
            "testlabels": null
          },
          "module": "afni.svm",
          "name": "SVMTest",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "afni.svm.SVMTrain": {
          "inputs": {
            "alphas": null,
            "args": null,
            "censor": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "kernel": null,
            "mask": null,
            "max_iterations": null,
            "model": null,
            "nomodelmask": null,
            "options": null,
            "out_file": null,
            "outputtype": null,
            "terminal_output": null,
            "trainlabels": null,
            "ttype": null,
            "w_out": null
          },
          "module": "afni.svm",
          "name": "SVMTrain",
          "outputs": {
            "alphas": null,
            "model": null,
            "out_file": null
          },
          "type": null
        },
        "ants.base.ANTSCommand": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "num_threads": 1,
            "terminal_output": null
          },
          "module": "ants.base",
          "name": "ANTSCommand",
          "outputs": {},
          "type": null
        },
        "ants.registration.ANTS": {
          "inputs": {
            "affine_gradient_descent_option": null,
            "args": null,
            "delta_time": null,
            "dimension": null,
            "environ": {},
            "fixed_image": null,
            "gradient_step_length": null,
            "ignore_exception": false,
            "metric": null,
            "metric_weight": null,
            "mi_option": null,
            "moving_image": null,
            "num_threads": 1,
            "number_of_affine_iterations": null,
            "number_of_iterations": null,
            "number_of_time_steps": null,
            "output_transform_prefix": "out",
            "radius": null,
            "regularization": null,
            "regularization_deformation_field_sigma": null,
            "regularization_gradient_field_sigma": null,
            "smoothing_sigmas": null,
            "subsampling_factors": null,
            "symmetry_type": null,
            "terminal_output": null,
            "transformation_model": null,
            "use_histogram_matching": false
          },
          "module": "ants.registration",
          "name": "ANTS",
          "outputs": {
            "affine_transform": null,
            "inverse_warp_transform": null,
            "metaheader": null,
            "metaheader_raw": null,
            "warp_transform": null
          },
          "type": null
        },
        "ants.registration.Registration": {
          "inputs": {
            "args": null,
            "collapse_output_transforms": false,
            "convergence_threshold": [
              1e-06
            ],
            "convergence_window_size": [
              10
            ],
            "dimension": 3,
            "environ": {},
            "fixed_image": null,
            "fixed_image_mask": null,
            "float": null,
            "ignore_exception": false,
            "initial_moving_transform": null,
            "initial_moving_transform_com": null,
            "initialize_transforms_per_stage": false,
            "interpolation": "Linear",
            "invert_initial_moving_transform": null,
            "metric": null,
            "metric_item_trait": null,
            "metric_stage_trait": null,
            "metric_weight": [
              1.0
            ],
            "metric_weight_item_trait": null,
            "metric_weight_stage_trait": null,
            "moving_image": null,
            "moving_image_mask": null,
            "num_threads": 1,
            "number_of_iterations": null,
            "output_inverse_warped_image": null,
            "output_transform_prefix": "transform",
            "output_warped_image": null,
            "radius_bins_item_trait": null,
            "radius_bins_stage_trait": null,
            "radius_or_number_of_bins": [
              5
            ],
            "restore_state": null,
            "sampling_percentage": null,
            "sampling_percentage_item_trait": null,
            "sampling_percentage_stage_trait": null,
            "sampling_strategy": null,
            "sampling_strategy_item_trait": null,
            "sampling_strategy_stage_trait": null,
            "save_state": null,
            "shrink_factors": null,
            "sigma_units": null,
            "smoothing_sigmas": null,
            "terminal_output": null,
            "transform_parameters": null,
            "transforms": null,
            "use_estimate_learning_rate_once": null,
            "use_histogram_matching": true,
            "winsorize_lower_quantile": 0.0,
            "winsorize_upper_quantile": 1.0,
            "write_composite_transform": false
          },
          "module": "ants.registration",
          "name": "Registration",
          "outputs": {
            "composite_transform": null,
            "forward_invert_flags": null,
            "forward_transforms": null,
            "inverse_composite_transform": null,
            "inverse_warped_image": null,
            "reverse_invert_flags": null,
            "reverse_transforms": null,
            "save_state": null,
            "warped_image": null
          },
          "type": null
        },
        "ants.resampling.ApplyTransforms": {
          "inputs": {
            "args": null,
            "default_value": 0.0,
            "dimension": null,
            "environ": {},
            "ignore_exception": false,
            "input_image": null,
            "input_image_type": null,
            "interpolation": "Linear",
            "invert_transform_flags": null,
            "num_threads": 1,
            "out_postfix": "_trans",
            "output_image": null,
            "print_out_composite_warp_file": null,
            "reference_image": null,
            "terminal_output": null,
            "transforms": null
          },
          "module": "ants.resampling",
          "name": "ApplyTransforms",
          "outputs": {
            "output_image": null
          },
          "type": null
        },
        "ants.resampling.ApplyTransformsToPoints": {
          "inputs": {
            "args": null,
            "dimension": null,
            "environ": {},
            "ignore_exception": false,
            "input_file": null,
            "invert_transform_flags": null,
            "num_threads": 1,
            "output_file": null,
            "terminal_output": null,
            "transforms": null
          },
          "module": "ants.resampling",
          "name": "ApplyTransformsToPoints",
          "outputs": {
            "output_file": null
          },
          "type": null
        },
        "ants.resampling.WarpImageMultiTransform": {
          "inputs": {
            "args": null,
            "dimension": 3,
            "environ": {},
            "ignore_exception": false,
            "input_image": null,
            "invert_affine": null,
            "num_threads": 1,
            "out_postfix": "_wimt",
            "output_image": null,
            "reference_image": null,
            "reslice_by_header": null,
            "terminal_output": null,
            "tightest_box": null,
            "transformation_series": null,
            "use_bspline": null,
            "use_nearest": null
          },
          "module": "ants.resampling",
          "name": "WarpImageMultiTransform",
          "outputs": {
            "output_image": null
          },
          "type": null
        },
        "ants.resampling.WarpTimeSeriesImageMultiTransform": {
          "inputs": {
            "args": null,
            "dimension": 4,
            "environ": {},
            "ignore_exception": false,
            "input_image": null,
            "invert_affine": null,
            "num_threads": 1,
            "out_postfix": "_wtsimt",
            "reference_image": null,
            "reslice_by_header": null,
            "terminal_output": null,
            "tightest_box": null,
            "transformation_series": null,
            "use_bspline": null,
            "use_nearest": null
          },
          "module": "ants.resampling",
          "name": "WarpTimeSeriesImageMultiTransform",
          "outputs": {
            "output_image": null
          },
          "type": null
        },
        "ants.segmentation.Atropos": {
          "inputs": {
            "args": null,
            "convergence_threshold": null,
            "dimension": 3,
            "environ": {},
            "icm_use_synchronous_update": null,
            "ignore_exception": false,
            "initialization": null,
            "intensity_images": null,
            "likelihood_model": null,
            "mask_image": null,
            "maximum_number_of_icm_terations": null,
            "mrf_radius": null,
            "mrf_smoothing_factor": null,
            "n_iterations": null,
            "num_threads": 1,
            "number_of_tissue_classes": null,
            "out_classified_image_name": null,
            "output_posteriors_name_template": "POSTERIOR_%02d.nii.gz",
            "posterior_formulation": null,
            "prior_probability_images": null,
            "prior_probability_threshold": null,
            "prior_weighting": null,
            "save_posteriors": null,
            "terminal_output": null,
            "use_mixture_model_proportions": null
          },
          "module": "ants.segmentation",
          "name": "Atropos",
          "outputs": {
            "classified_image": null,
            "posteriors": null
          },
          "type": null
        },
        "ants.segmentation.JointFusion": {
          "inputs": {
            "alpha": 0.0,
            "args": null,
            "atlas_group_id": null,
            "atlas_group_weights": null,
            "beta": 0,
            "dimension": 3,
            "environ": {},
            "exclusion_region": null,
            "ignore_exception": false,
            "method": "",
            "modalities": null,
            "num_threads": 1,
            "output_label_image": null,
            "patch_radius": null,
            "search_radius": null,
            "target_image": null,
            "terminal_output": null,
            "warped_intensity_images": null,
            "warped_label_images": null
          },
          "module": "ants.segmentation",
          "name": "JointFusion",
          "outputs": {
            "output_label_image": null
          },
          "type": null
        },
        "ants.segmentation.LaplacianThickness": {
          "inputs": {
            "args": null,
            "dT": null,
            "environ": {},
            "ignore_exception": false,
            "input_gm": null,
            "input_wm": null,
            "num_threads": 1,
            "opt_tolerance": null,
            "output_image": null,
            "prior_thickness": null,
            "smooth_param": null,
            "sulcus_prior": null,
            "terminal_output": null
          },
          "module": "ants.segmentation",
          "name": "LaplacianThickness",
          "outputs": {
            "output_image": null
          },
          "type": null
        },
        "ants.segmentation.N4BiasFieldCorrection": {
          "inputs": {
            "args": null,
            "bias_image": null,
            "bspline_fitting_distance": null,
            "bspline_order": null,
            "convergence_threshold": null,
            "dimension": 3,
            "environ": {},
            "ignore_exception": false,
            "input_image": null,
            "mask_image": null,
            "n_iterations": null,
            "num_threads": 1,
            "output_image": null,
            "save_bias": false,
            "shrink_factor": null,
            "terminal_output": null,
            "weight_image": null
          },
          "module": "ants.segmentation",
          "name": "N4BiasFieldCorrection",
          "outputs": {
            "bias_image": null,
            "output_image": null
          },
          "type": null
        },
        "ants.segmentation.antsCorticalThickness": {
          "inputs": {
            "anatomical_image": null,
            "args": null,
            "b_spline_smoothing": null,
            "brain_probability_mask": null,
            "brain_template": null,
            "cortical_label_image": null,
            "debug": null,
            "dimension": 3,
            "environ": {},
            "extraction_registration_mask": null,
            "ignore_exception": false,
            "image_suffix": "nii.gz",
            "keep_temporary_files": null,
            "label_propagation": null,
            "max_iterations": null,
            "num_threads": 1,
            "out_prefix": "antsCT_",
            "posterior_formulation": null,
            "prior_segmentation_weight": null,
            "quick_registration": null,
            "segmentation_iterations": null,
            "segmentation_priors": null,
            "t1_registration_template": null,
            "terminal_output": null,
            "use_floatingpoint_precision": null,
            "use_random_seeding": null
          },
          "module": "ants.segmentation",
          "name": "antsCorticalThickness",
          "outputs": {
            "BrainExtractionMask": null,
            "BrainSegmentation": null,
            "BrainSegmentationN4": null,
            "BrainSegmentationPosteriors": null,
            "BrainVolumes": null,
            "CorticalThickness": null,
            "CorticalThicknessNormedToTemplate": null,
            "SubjectToTemplate0GenericAffine": null,
            "SubjectToTemplate1Warp": null,
            "SubjectToTemplateLogJacobian": null,
            "TemplateToSubject0Warp": null,
            "TemplateToSubject1GenericAffine": null
          },
          "type": null
        },
        "ants.utils.AverageAffineTransform": {
          "inputs": {
            "args": null,
            "dimension": null,
            "environ": {},
            "ignore_exception": false,
            "num_threads": 1,
            "output_affine_transform": null,
            "terminal_output": null,
            "transforms": null
          },
          "module": "ants.utils",
          "name": "AverageAffineTransform",
          "outputs": {
            "affine_transform": null
          },
          "type": null
        },
        "ants.utils.AverageImages": {
          "inputs": {
            "args": null,
            "dimension": null,
            "environ": {},
            "ignore_exception": false,
            "images": null,
            "normalize": null,
            "num_threads": 1,
            "output_average_image": "average.nii",
            "terminal_output": null
          },
          "module": "ants.utils",
          "name": "AverageImages",
          "outputs": {
            "output_average_image": null
          },
          "type": null
        },
        "ants.utils.JacobianDeterminant": {
          "inputs": {
            "args": null,
            "dimension": null,
            "environ": {},
            "ignore_exception": false,
            "norm_by_total": null,
            "num_threads": 1,
            "output_prefix": null,
            "projection_vector": null,
            "template_mask": null,
            "terminal_output": null,
            "use_log": null,
            "warp_file": null
          },
          "module": "ants.utils",
          "name": "JacobianDeterminant",
          "outputs": {
            "jacobian_image": null
          },
          "type": null
        },
        "ants.utils.MultiplyImages": {
          "inputs": {
            "args": null,
            "dimension": null,
            "environ": {},
            "first_input": null,
            "ignore_exception": false,
            "num_threads": 1,
            "output_product_image": null,
            "second_input": null,
            "terminal_output": null
          },
          "module": "ants.utils",
          "name": "MultiplyImages",
          "outputs": {
            "output_product_image": null
          },
          "type": null
        },
        "ants.visualization.ConvertScalarImageToRGB": {
          "inputs": {
            "args": null,
            "colormap": "",
            "custom_color_map_file": "none",
            "dimension": 3,
            "environ": {},
            "ignore_exception": false,
            "input_image": null,
            "mask_image": "none",
            "maximum_RGB_output": 255,
            "maximum_input": null,
            "minimum_RGB_output": 0,
            "minimum_input": null,
            "num_threads": 1,
            "output_image": "rgb.nii.gz",
            "terminal_output": null
          },
          "module": "ants.visualization",
          "name": "ConvertScalarImageToRGB",
          "outputs": {
            "output_image": null
          },
          "type": null
        },
        "ants.visualization.CreateTiledMosaic": {
          "inputs": {
            "alpha_value": null,
            "args": null,
            "direction": null,
            "environ": {},
            "flip_slice": null,
            "ignore_exception": false,
            "input_image": null,
            "mask_image": null,
            "num_threads": 1,
            "output_image": "output.png",
            "pad_or_crop": null,
            "permute_axes": null,
            "rgb_image": null,
            "slices": null,
            "terminal_output": null,
            "tile_geometry": null
          },
          "module": "ants.visualization",
          "name": "CreateTiledMosaic",
          "outputs": {
            "output_image": null
          },
          "type": null
        },
        "base.BaseInterface": {
          "inputs": {
            "ignore_exception": false
          },
          "module": "base",
          "name": "BaseInterface",
          "outputs": {},
          "type": null
        },
        "base.CommandLine": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "terminal_output": null
          },
          "module": "base",
          "name": "CommandLine",
          "outputs": {},
          "type": null
        },
        "base.Interface": {
          "inputs": {},
          "module": "base",
          "name": "Interface",
          "outputs": {},
          "type": null
        },
        "base.MpiCommandLine": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "n_procs": null,
            "terminal_output": null,
            "use_mpi": false
          },
          "module": "base",
          "name": "MpiCommandLine",
          "outputs": {},
          "type": null
        },
        "base.SEMLikeCommandLine": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "terminal_output": null
          },
          "module": "base",
          "name": "SEMLikeCommandLine",
          "outputs": {},
          "type": null
        },
        "base.StdOutCommandLine": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "out_file": null,
            "terminal_output": null
          },
          "module": "base",
          "name": "StdOutCommandLine",
          "outputs": {},
          "type": null
        },
        "camino.calib.SFLUTGen": {
          "inputs": {
            "args": null,
            "binincsize": null,
            "directmap": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "info_file": null,
            "minvectsperbin": null,
            "order": null,
            "out_file": null,
            "outputstem": "LUT",
            "pdf": "bingham",
            "terminal_output": null
          },
          "module": "camino.calib",
          "name": "SFLUTGen",
          "outputs": {
            "lut_one_fibre": null,
            "lut_two_fibres": null
          },
          "type": null
        },
        "camino.calib.SFPICOCalibData": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "info_file": null,
            "onedtfarange": null,
            "onedtfastep": null,
            "out_file": null,
            "scheme_file": null,
            "seed": null,
            "snr": null,
            "terminal_output": null,
            "trace": null,
            "twodtanglerange": null,
            "twodtanglestep": null,
            "twodtfarange": null,
            "twodtfastep": null,
            "twodtmixmax": null,
            "twodtmixstep": null
          },
          "module": "camino.calib",
          "name": "SFPICOCalibData",
          "outputs": {
            "PICOCalib": null,
            "calib_info": null
          },
          "type": null
        },
        "camino.connectivity.Conmat": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "output_root": null,
            "scalar_file": null,
            "target_file": null,
            "targetname_file": null,
            "terminal_output": null,
            "tract_prop": null,
            "tract_stat": null
          },
          "module": "camino.connectivity",
          "name": "Conmat",
          "outputs": {
            "conmat_sc": null,
            "conmat_ts": null
          },
          "type": null
        },
        "camino.convert.AnalyzeHeader": {
          "inputs": {
            "args": null,
            "centre": null,
            "data_dims": null,
            "datatype": null,
            "description": null,
            "environ": {},
            "greylevels": null,
            "ignore_exception": false,
            "in_file": null,
            "initfromheader": null,
            "intelbyteorder": null,
            "networkbyteorder": null,
            "nimages": null,
            "offset": null,
            "out_file": null,
            "picoseed": null,
            "printbigendian": null,
            "printimagedims": null,
            "printintelbyteorder": null,
            "printprogargs": null,
            "readheader": null,
            "scaleinter": null,
            "scaleslope": null,
            "scheme_file": null,
            "terminal_output": null,
            "voxel_dims": null
          },
          "module": "camino.convert",
          "name": "AnalyzeHeader",
          "outputs": {
            "header": null
          },
          "type": null
        },
        "camino.convert.DT2NIfTI": {
          "inputs": {
            "args": null,
            "environ": {},
            "header_file": null,
            "ignore_exception": false,
            "in_file": null,
            "output_root": null,
            "terminal_output": null
          },
          "module": "camino.convert",
          "name": "DT2NIfTI",
          "outputs": {
            "dt": null,
            "exitcode": null,
            "lns0": null
          },
          "type": null
        },
        "camino.convert.FSL2Scheme": {
          "inputs": {
            "args": null,
            "bscale": null,
            "bval_file": null,
            "bvec_file": null,
            "diffusiontime": null,
            "environ": {},
            "flipx": null,
            "flipy": null,
            "flipz": null,
            "ignore_exception": false,
            "interleave": null,
            "numscans": null,
            "out_file": null,
            "terminal_output": null,
            "usegradmod": null
          },
          "module": "camino.convert",
          "name": "FSL2Scheme",
          "outputs": {
            "scheme": null
          },
          "type": null
        },
        "camino.convert.Image2Voxel": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "out_type": "float",
            "terminal_output": null
          },
          "module": "camino.convert",
          "name": "Image2Voxel",
          "outputs": {
            "voxel_order": null
          },
          "type": null
        },
        "camino.convert.NIfTIDT2Camino": {
          "inputs": {
            "args": null,
            "bgmask": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "lns0_file": null,
            "out_file": null,
            "s0_file": null,
            "scaleinter": null,
            "scaleslope": null,
            "terminal_output": null,
            "uppertriangular": null
          },
          "module": "camino.convert",
          "name": "NIfTIDT2Camino",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "camino.convert.ProcStreamlines": {
          "inputs": {
            "allowmultitargets": null,
            "args": null,
            "datadims": null,
            "directional": null,
            "discardloops": null,
            "endpointfile": null,
            "environ": {},
            "exclusionfile": null,
            "gzip": null,
            "ignore_exception": false,
            "in_file": null,
            "inputmodel": "raw",
            "iterations": null,
            "maxtractlength": null,
            "maxtractpoints": null,
            "mintractlength": null,
            "mintractpoints": null,
            "noresample": null,
            "out_file": null,
            "outputacm": null,
            "outputcbs": null,
            "outputcp": null,
            "outputroot": null,
            "outputsc": null,
            "outputtracts": null,
            "regionindex": null,
            "resamplestepsize": null,
            "seedfile": null,
            "seedpointmm": null,
            "seedpointvox": null,
            "targetfile": null,
            "terminal_output": null,
            "truncateinexclusion": null,
            "truncateloops": null,
            "voxeldims": null,
            "waypointfile": null
          },
          "module": "camino.convert",
          "name": "ProcStreamlines",
          "outputs": {
            "outputroot_files": null,
            "proc": null
          },
          "type": null
        },
        "camino.convert.Shredder": {
          "inputs": {
            "args": null,
            "chunksize": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "offset": null,
            "out_file": null,
            "space": null,
            "terminal_output": null
          },
          "module": "camino.convert",
          "name": "Shredder",
          "outputs": {
            "shredded": null
          },
          "type": null
        },
        "camino.convert.TractShredder": {
          "inputs": {
            "args": null,
            "bunchsize": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "offset": null,
            "out_file": null,
            "space": null,
            "terminal_output": null
          },
          "module": "camino.convert",
          "name": "TractShredder",
          "outputs": {
            "shredded": null
          },
          "type": null
        },
        "camino.convert.VtkStreamlines": {
          "inputs": {
            "args": null,
            "colourorient": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "inputmodel": "raw",
            "interpolate": null,
            "interpolatescalars": null,
            "out_file": null,
            "scalar_file": null,
            "seed_file": null,
            "target_file": null,
            "terminal_output": null,
            "voxeldims": null
          },
          "module": "camino.convert",
          "name": "VtkStreamlines",
          "outputs": {
            "vtk": null
          },
          "type": null
        },
        "camino.dti.ComputeEigensystem": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": "double",
            "inputmodel": null,
            "maxcomponents": null,
            "out_file": null,
            "outputdatatype": "double",
            "terminal_output": null
          },
          "module": "camino.dti",
          "name": "ComputeEigensystem",
          "outputs": {
            "eigen": null
          },
          "type": null
        },
        "camino.dti.ComputeFractionalAnisotropy": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": null,
            "out_file": null,
            "outputdatatype": null,
            "scheme_file": null,
            "terminal_output": null
          },
          "module": "camino.dti",
          "name": "ComputeFractionalAnisotropy",
          "outputs": {
            "fa": null
          },
          "type": null
        },
        "camino.dti.ComputeMeanDiffusivity": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": null,
            "out_file": null,
            "outputdatatype": null,
            "scheme_file": null,
            "terminal_output": null
          },
          "module": "camino.dti",
          "name": "ComputeMeanDiffusivity",
          "outputs": {
            "md": null
          },
          "type": null
        },
        "camino.dti.ComputeTensorTrace": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": null,
            "out_file": null,
            "outputdatatype": null,
            "scheme_file": null,
            "terminal_output": null
          },
          "module": "camino.dti",
          "name": "ComputeTensorTrace",
          "outputs": {
            "trace": null
          },
          "type": null
        },
        "camino.dti.DTIFit": {
          "inputs": {
            "args": null,
            "bgmask": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "non_linear": null,
            "out_file": null,
            "scheme_file": null,
            "terminal_output": null
          },
          "module": "camino.dti",
          "name": "DTIFit",
          "outputs": {
            "tensor_fitted": null
          },
          "type": null
        },
        "camino.dti.DTLUTGen": {
          "inputs": {
            "acg": null,
            "args": null,
            "bingham": null,
            "environ": {},
            "frange": null,
            "ignore_exception": false,
            "inversion": null,
            "lrange": null,
            "out_file": null,
            "samples": null,
            "scheme_file": null,
            "snr": null,
            "step": null,
            "terminal_output": null,
            "trace": null,
            "watson": null
          },
          "module": "camino.dti",
          "name": "DTLUTGen",
          "outputs": {
            "dtLUT": null
          },
          "type": null
        },
        "camino.dti.DTMetric": {
          "inputs": {
            "args": null,
            "data_header": null,
            "eigen_data": null,
            "environ": {},
            "ignore_exception": false,
            "inputdatatype": "double",
            "metric": null,
            "outputdatatype": "double",
            "outputfile": null,
            "terminal_output": null
          },
          "module": "camino.dti",
          "name": "DTMetric",
          "outputs": {
            "metric_stats": null
          },
          "type": null
        },
        "camino.dti.ModelFit": {
          "inputs": {
            "args": null,
            "bgmask": null,
            "bgthresh": null,
            "cfthresh": null,
            "environ": {},
            "fixedbvalue": null,
            "fixedmodq": null,
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "model": null,
            "noisemap": null,
            "out_file": null,
            "outlier": null,
            "outputfile": null,
            "residualmap": null,
            "scheme_file": null,
            "sigma": null,
            "tau": null,
            "terminal_output": null
          },
          "module": "camino.dti",
          "name": "ModelFit",
          "outputs": {
            "fitted_data": null
          },
          "type": null
        },
        "camino.dti.PicoPDFs": {
          "inputs": {
            "args": null,
            "directmap": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "inputmodel": "dt",
            "luts": null,
            "maxcomponents": null,
            "numpds": null,
            "out_file": null,
            "pdf": "bingham",
            "terminal_output": null
          },
          "module": "camino.dti",
          "name": "PicoPDFs",
          "outputs": {
            "pdfs": null
          },
          "type": null
        },
        "camino.dti.Track": {
          "inputs": {
            "anisfile": null,
            "anisthresh": null,
            "args": null,
            "curveinterval": null,
            "curvethresh": null,
            "data_dims": null,
            "environ": {},
            "gzip": null,
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": "dt",
            "interpolator": null,
            "ipthresh": null,
            "maxcomponents": null,
            "numpds": null,
            "out_file": null,
            "output_root": null,
            "outputtracts": null,
            "seed_file": null,
            "stepsize": null,
            "terminal_output": null,
            "tracker": "fact",
            "voxel_dims": null
          },
          "module": "camino.dti",
          "name": "Track",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "camino.dti.TrackBallStick": {
          "inputs": {
            "anisfile": null,
            "anisthresh": null,
            "args": null,
            "curveinterval": null,
            "curvethresh": null,
            "data_dims": null,
            "environ": {},
            "gzip": null,
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": "dt",
            "interpolator": null,
            "ipthresh": null,
            "maxcomponents": null,
            "numpds": null,
            "out_file": null,
            "output_root": null,
            "outputtracts": null,
            "seed_file": null,
            "stepsize": null,
            "terminal_output": null,
            "tracker": "fact",
            "voxel_dims": null
          },
          "module": "camino.dti",
          "name": "TrackBallStick",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "camino.dti.TrackBayesDirac": {
          "inputs": {
            "anisfile": null,
            "anisthresh": null,
            "args": null,
            "curveinterval": null,
            "curvepriorg": null,
            "curvepriork": null,
            "curvethresh": null,
            "data_dims": null,
            "datamodel": null,
            "environ": {},
            "extpriordatatype": null,
            "extpriorfile": null,
            "gzip": null,
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": "dt",
            "interpolator": null,
            "ipthresh": null,
            "iterations": null,
            "maxcomponents": null,
            "numpds": null,
            "out_file": null,
            "output_root": null,
            "outputtracts": null,
            "pdf": null,
            "pointset": null,
            "scheme_file": null,
            "seed_file": null,
            "stepsize": null,
            "terminal_output": null,
            "tracker": "fact",
            "voxel_dims": null
          },
          "module": "camino.dti",
          "name": "TrackBayesDirac",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "camino.dti.TrackBedpostxDeter": {
          "inputs": {
            "anisfile": null,
            "anisthresh": null,
            "args": null,
            "bedpostxdir": null,
            "curveinterval": null,
            "curvethresh": null,
            "data_dims": null,
            "environ": {},
            "gzip": null,
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": "dt",
            "interpolator": null,
            "ipthresh": null,
            "maxcomponents": null,
            "min_vol_frac": null,
            "numpds": null,
            "out_file": null,
            "output_root": null,
            "outputtracts": null,
            "seed_file": null,
            "stepsize": null,
            "terminal_output": null,
            "tracker": "fact",
            "voxel_dims": null
          },
          "module": "camino.dti",
          "name": "TrackBedpostxDeter",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "camino.dti.TrackBedpostxProba": {
          "inputs": {
            "anisfile": null,
            "anisthresh": null,
            "args": null,
            "bedpostxdir": null,
            "curveinterval": null,
            "curvethresh": null,
            "data_dims": null,
            "environ": {},
            "gzip": null,
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": "dt",
            "interpolator": null,
            "ipthresh": null,
            "iterations": null,
            "maxcomponents": null,
            "min_vol_frac": null,
            "numpds": null,
            "out_file": null,
            "output_root": null,
            "outputtracts": null,
            "seed_file": null,
            "stepsize": null,
            "terminal_output": null,
            "tracker": "fact",
            "voxel_dims": null
          },
          "module": "camino.dti",
          "name": "TrackBedpostxProba",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "camino.dti.TrackBootstrap": {
          "inputs": {
            "anisfile": null,
            "anisthresh": null,
            "args": null,
            "bgmask": null,
            "bsdatafiles": null,
            "curveinterval": null,
            "curvethresh": null,
            "data_dims": null,
            "environ": {},
            "gzip": null,
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": "dt",
            "interpolator": null,
            "inversion": null,
            "ipthresh": null,
            "iterations": null,
            "maxcomponents": null,
            "numpds": null,
            "out_file": null,
            "output_root": null,
            "outputtracts": null,
            "scheme_file": null,
            "seed_file": null,
            "stepsize": null,
            "terminal_output": null,
            "tracker": "fact",
            "voxel_dims": null
          },
          "module": "camino.dti",
          "name": "TrackBootstrap",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "camino.dti.TrackDT": {
          "inputs": {
            "anisfile": null,
            "anisthresh": null,
            "args": null,
            "curveinterval": null,
            "curvethresh": null,
            "data_dims": null,
            "environ": {},
            "gzip": null,
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": "dt",
            "interpolator": null,
            "ipthresh": null,
            "maxcomponents": null,
            "numpds": null,
            "out_file": null,
            "output_root": null,
            "outputtracts": null,
            "seed_file": null,
            "stepsize": null,
            "terminal_output": null,
            "tracker": "fact",
            "voxel_dims": null
          },
          "module": "camino.dti",
          "name": "TrackDT",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "camino.dti.TrackPICo": {
          "inputs": {
            "anisfile": null,
            "anisthresh": null,
            "args": null,
            "curveinterval": null,
            "curvethresh": null,
            "data_dims": null,
            "environ": {},
            "gzip": null,
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inputmodel": "dt",
            "interpolator": null,
            "ipthresh": null,
            "iterations": null,
            "maxcomponents": null,
            "numpds": null,
            "out_file": null,
            "output_root": null,
            "outputtracts": null,
            "pdf": null,
            "seed_file": null,
            "stepsize": null,
            "terminal_output": null,
            "tracker": "fact",
            "voxel_dims": null
          },
          "module": "camino.dti",
          "name": "TrackPICo",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "camino.odf.LinRecon": {
          "inputs": {
            "args": null,
            "bgmask": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "log": null,
            "normalize": null,
            "out_file": null,
            "qball_mat": null,
            "scheme_file": null,
            "terminal_output": null
          },
          "module": "camino.odf",
          "name": "LinRecon",
          "outputs": {
            "recon_data": null
          },
          "type": null
        },
        "camino.odf.MESD": {
          "inputs": {
            "args": null,
            "bgmask": null,
            "environ": {},
            "fastmesd": null,
            "ignore_exception": false,
            "in_file": null,
            "inputdatatype": null,
            "inverter": null,
            "inverter_param": null,
            "mepointset": null,
            "out_file": null,
            "scheme_file": null,
            "terminal_output": null
          },
          "module": "camino.odf",
          "name": "MESD",
          "outputs": {
            "mesd_data": null
          },
          "type": null
        },
        "camino.odf.QBallMX": {
          "inputs": {
            "args": null,
            "basistype": "rbf",
            "environ": {},
            "ignore_exception": false,
            "order": null,
            "out_file": null,
            "rbfpointset": null,
            "rbfsigma": null,
            "scheme_file": null,
            "smoothingsigma": null,
            "terminal_output": null
          },
          "module": "camino.odf",
          "name": "QBallMX",
          "outputs": {
            "qmat": null
          },
          "type": null
        },
        "camino.odf.SFPeaks": {
          "inputs": {
            "args": null,
            "density": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "inputmodel": null,
            "mepointset": null,
            "noconsistencycheck": null,
            "numpds": null,
            "order": null,
            "out_file": null,
            "pdthresh": null,
            "pointset": null,
            "rbfpointset": null,
            "scheme_file": null,
            "searchradius": null,
            "stdsfrommean": null,
            "terminal_output": null
          },
          "module": "camino.odf",
          "name": "SFPeaks",
          "outputs": {
            "peaks": null
          },
          "type": null
        },
        "camino.utils.ImageStats": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_files": null,
            "out_type": "float",
            "output_root": null,
            "stat": null,
            "terminal_output": null
          },
          "module": "camino.utils",
          "name": "ImageStats",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "camino2trackvis.convert.Camino2Trackvis": {
          "inputs": {
            "args": null,
            "data_dims": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "min_length": null,
            "nifti_file": null,
            "out_file": null,
            "terminal_output": null,
            "voxel_dims": null,
            "voxel_order": null
          },
          "module": "camino2trackvis.convert",
          "name": "Camino2Trackvis",
          "outputs": {
            "trackvis": null
          },
          "type": null
        },
        "camino2trackvis.convert.Trackvis2Camino": {
          "inputs": {
            "append_file": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "terminal_output": null
          },
          "module": "camino2trackvis.convert",
          "name": "Trackvis2Camino",
          "outputs": {
            "camino": null
          },
          "type": null
        },
        "cmtk.cmtk.CreateMatrix": {
          "inputs": {
            "count_region_intersections": false,
            "out_endpoint_array_name": null,
            "out_fiber_length_std_matrix_mat_file": null,
            "out_intersection_matrix_mat_file": null,
            "out_matrix_file": null,
            "out_matrix_mat_file": "cmatrix.mat",
            "out_mean_fiber_length_matrix_mat_file": null,
            "out_median_fiber_length_matrix_mat_file": null,
            "resolution_network_file": null,
            "roi_file": null,
            "tract_file": null
          },
          "module": "cmtk.cmtk",
          "name": "CreateMatrix",
          "outputs": {
            "endpoint_file": null,
            "endpoint_file_mm": null,
            "fiber_label_file": null,
            "fiber_labels_noorphans": null,
            "fiber_length_file": null,
            "fiber_length_std_matrix_mat_file": null,
            "filtered_tractographies": null,
            "filtered_tractography": null,
            "filtered_tractography_by_intersections": null,
            "intersection_matrix_file": null,
            "intersection_matrix_mat_file": null,
            "matlab_matrix_files": null,
            "matrix_file": null,
            "matrix_files": null,
            "matrix_mat_file": null,
            "mean_fiber_length_matrix_mat_file": null,
            "median_fiber_length_matrix_mat_file": null,
            "stats_file": null
          },
          "type": null
        },
        "cmtk.cmtk.CreateNodes": {
          "inputs": {
            "ignore_exception": false,
            "out_filename": "nodenetwork.pck",
            "resolution_network_file": null,
            "roi_file": null
          },
          "module": "cmtk.cmtk",
          "name": "CreateNodes",
          "outputs": {
            "node_network": null
          },
          "type": null
        },
        "cmtk.cmtk.ROIGen": {
          "inputs": {
            "LUT_file": null,
            "aparc_aseg_file": null,
            "freesurfer_dir": null,
            "ignore_exception": false,
            "out_dict_file": null,
            "out_roi_file": null,
            "use_freesurfer_LUT": null
          },
          "module": "cmtk.cmtk",
          "name": "ROIGen",
          "outputs": {
            "dict_file": null,
            "roi_file": null
          },
          "type": null
        },
        "cmtk.convert.CFFConverter": {
          "inputs": {
            "creator": null,
            "data_files": null,
            "description": "Created with the Nipype CFF converter",
            "email": null,
            "gifti_labels": null,
            "gifti_surfaces": null,
            "gpickled_networks": null,
            "graphml_networks": null,
            "ignore_exception": false,
            "license": null,
            "nifti_volumes": null,
            "out_file": "connectome.cff",
            "publisher": null,
            "references": null,
            "relation": null,
            "rights": null,
            "script_files": null,
            "species": "Homo sapiens",
            "timeseries_files": null,
            "title": null,
            "tract_files": null
          },
          "module": "cmtk.convert",
          "name": "CFFConverter",
          "outputs": {
            "connectome_file": null
          },
          "type": null
        },
        "cmtk.convert.MergeCNetworks": {
          "inputs": {
            "ignore_exception": false,
            "in_files": null,
            "out_file": "merged_network_connectome.cff"
          },
          "module": "cmtk.convert",
          "name": "MergeCNetworks",
          "outputs": {
            "connectome_file": null
          },
          "type": null
        },
        "cmtk.nbs.NetworkBasedStatistic": {
          "inputs": {
            "edge_key": "number_of_fibers",
            "ignore_exception": false,
            "in_group1": null,
            "in_group2": null,
            "node_position_network": null,
            "number_of_permutations": 1000,
            "out_nbs_network": null,
            "out_nbs_pval_network": null,
            "t_tail": "left",
            "threshold": 3
          },
          "module": "cmtk.nbs",
          "name": "NetworkBasedStatistic",
          "outputs": {
            "nbs_network": null,
            "nbs_pval_network": null,
            "network_files": null
          },
          "type": null
        },
        "cmtk.nx.AverageNetworks": {
          "inputs": {
            "group_id": "group1",
            "ignore_exception": false,
            "in_files": null,
            "out_gexf_groupavg": null,
            "out_gpickled_groupavg": null,
            "resolution_network_file": null
          },
          "module": "cmtk.nx",
          "name": "AverageNetworks",
          "outputs": {
            "gexf_groupavg": null,
            "gpickled_groupavg": null,
            "matlab_groupavgs": null
          },
          "type": null
        },
        "cmtk.nx.NetworkXMetrics": {
          "inputs": {
            "compute_clique_related_measures": false,
            "ignore_exception": false,
            "in_file": null,
            "out_edge_metrics_matlab": null,
            "out_global_metrics_matlab": null,
            "out_k_core": "k_core",
            "out_k_crust": "k_crust",
            "out_k_shell": "k_shell",
            "out_node_metrics_matlab": null,
            "out_pickled_extra_measures": "extra_measures",
            "treat_as_weighted_graph": true
          },
          "module": "cmtk.nx",
          "name": "NetworkXMetrics",
          "outputs": {
            "edge_measure_networks": null,
            "edge_measures_matlab": null,
            "global_measures_matlab": null,
            "gpickled_network_files": null,
            "k_core": null,
            "k_crust": null,
            "k_networks": null,
            "k_shell": null,
            "matlab_dict_measures": null,
            "matlab_matrix_files": null,
            "node_measure_networks": null,
            "node_measures_matlab": null,
            "pickled_extra_measures": null
          },
          "type": null
        },
        "cmtk.parcellation.Parcellate": {
          "inputs": {
            "dilation": false,
            "freesurfer_dir": null,
            "ignore_exception": false,
            "out_roi_file": null,
            "parcellation_name": "scale500",
            "subject_id": null,
            "subjects_dir": null
          },
          "module": "cmtk.parcellation",
          "name": "Parcellate",
          "outputs": {
            "aseg_file": null,
            "cc_unknown_file": null,
            "dilated_roi_file_in_structural_space": null,
            "ribbon_file": null,
            "roi_file": null,
            "roi_file_in_structural_space": null,
            "roiv_file": null,
            "white_matter_mask_file": null
          },
          "type": null
        },
        "diffusion_toolkit.dti.DTIRecon": {
          "inputs": {
            "DWI": null,
            "args": null,
            "b0_threshold": null,
            "bvals": null,
            "bvecs": null,
            "environ": {},
            "ignore_exception": false,
            "image_orientation_vectors": null,
            "n_averages": null,
            "oblique_correction": null,
            "out_prefix": "dti",
            "output_type": "nii",
            "terminal_output": null
          },
          "module": "diffusion_toolkit.dti",
          "name": "DTIRecon",
          "outputs": {
            "ADC": null,
            "B0": null,
            "FA": null,
            "FA_color": null,
            "L1": null,
            "L2": null,
            "L3": null,
            "V1": null,
            "V2": null,
            "V3": null,
            "exp": null,
            "tensor": null
          },
          "type": null
        },
        "diffusion_toolkit.dti.DTITracker": {
          "inputs": {
            "angle_threshold": null,
            "angle_threshold_weight": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "input_data_prefix": "dti",
            "input_type": null,
            "invert_x": null,
            "invert_y": null,
            "invert_z": null,
            "mask1_file": null,
            "mask1_threshold": null,
            "mask2_file": null,
            "mask2_threshold": null,
            "output_file": "tracks.trk",
            "output_mask": null,
            "primary_vector": null,
            "random_seed": null,
            "step_length": null,
            "swap_xy": null,
            "swap_yz": null,
            "swap_zx": null,
            "tensor_file": null,
            "terminal_output": null,
            "tracking_method": null
          },
          "module": "diffusion_toolkit.dti",
          "name": "DTITracker",
          "outputs": {
            "mask_file": null,
            "track_file": null
          },
          "type": null
        },
        "diffusion_toolkit.odf.HARDIMat": {
          "inputs": {
            "args": null,
            "bvals": null,
            "bvecs": null,
            "environ": {},
            "ignore_exception": false,
            "image_info": null,
            "image_orientation_vectors": null,
            "oblique_correction": null,
            "odf_file": null,
            "order": null,
            "out_file": "recon_mat.dat",
            "reference_file": null,
            "terminal_output": null
          },
          "module": "diffusion_toolkit.odf",
          "name": "HARDIMat",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "diffusion_toolkit.odf.ODFRecon": {
          "inputs": {
            "DWI": null,
            "args": null,
            "dsi": null,
            "environ": {},
            "filter": null,
            "ignore_exception": false,
            "image_orientation_vectors": null,
            "matrix": null,
            "n_b0": null,
            "n_directions": null,
            "n_output_directions": null,
            "oblique_correction": null,
            "out_prefix": "odf",
            "output_entropy": null,
            "output_type": "nii",
            "sharpness": null,
            "subtract_background": null,
            "terminal_output": null
          },
          "module": "diffusion_toolkit.odf",
          "name": "ODFRecon",
          "outputs": {
            "B0": null,
            "DWI": null,
            "ODF": null,
            "entropy": null,
            "max": null
          },
          "type": null
        },
        "diffusion_toolkit.odf.ODFTracker": {
          "inputs": {
            "ODF": null,
            "angle_threshold": null,
            "args": null,
            "disc": null,
            "dsi": null,
            "environ": {},
            "ignore_exception": false,
            "image_orientation_vectors": null,
            "input_data_prefix": "odf",
            "input_output_type": "nii",
            "invert_x": null,
            "invert_y": null,
            "invert_z": null,
            "limit": null,
            "mask1_file": null,
            "mask1_threshold": null,
            "mask2_file": null,
            "mask2_threshold": null,
            "max": null,
            "out_file": "tracks.trk",
            "random_seed": null,
            "runge_kutta2": null,
            "slice_order": null,
            "step_length": null,
            "swap_xy": null,
            "swap_yz": null,
            "swap_zx": null,
            "terminal_output": null,
            "voxel_order": null
          },
          "module": "diffusion_toolkit.odf",
          "name": "ODFTracker",
          "outputs": {
            "track_file": null
          },
          "type": null
        },
        "diffusion_toolkit.postproc.SplineFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "output_file": "spline_tracks.trk",
            "step_length": null,
            "terminal_output": null,
            "track_file": null
          },
          "module": "diffusion_toolkit.postproc",
          "name": "SplineFilter",
          "outputs": {
            "smoothed_track_file": null
          },
          "type": null
        },
        "diffusion_toolkit.postproc.TrackMerge": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "output_file": "merged_tracks.trk",
            "terminal_output": null,
            "track_files": null
          },
          "module": "diffusion_toolkit.postproc",
          "name": "TrackMerge",
          "outputs": {
            "track_file": null
          },
          "type": null
        },
        "dipy.preprocess.Denoise": {
          "inputs": {
            "block_radius": null,
            "in_file": null,
            "in_mask": null,
            "noise_mask": null,
            "noise_model": "rician",
            "patch_radius": null
          },
          "module": "dipy.preprocess",
          "name": "Denoise",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "dipy.preprocess.Resample": {
          "inputs": {
            "in_file": null,
            "interp": 1,
            "vox_size": null
          },
          "module": "dipy.preprocess",
          "name": "Resample",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "dipy.simulate.SimulateMultiTensor": {
          "inputs": {
            "baseline": null,
            "bvalues": [
              1000,
              3000
            ],
            "diff_iso": [
              0.003,
              0.00096,
              0.00068
            ],
            "diff_sf": [
              0.0017,
              0.0002,
              0.0002
            ],
            "gradients": null,
            "ignore_exception": false,
            "in_bval": null,
            "in_bvec": null,
            "in_dirs": null,
            "in_frac": null,
            "in_mask": null,
            "in_vfms": null,
            "n_proc": 0,
            "num_dirs": 32,
            "out_bval": "bval.sim",
            "out_bvec": "bvec.sim",
            "out_file": "sim_dwi.nii.gz",
            "out_mask": "sim_msk.nii.gz",
            "snr": 0
          },
          "module": "dipy.simulate",
          "name": "SimulateMultiTensor",
          "outputs": {
            "out_bval": null,
            "out_bvec": null,
            "out_file": null,
            "out_mask": null
          },
          "type": null
        },
        "dipy.tensors.DTI": {
          "inputs": {
            "bvals": null,
            "bvecs": null,
            "in_file": null,
            "mask_file": null,
            "out_filename": null
          },
          "module": "dipy.tensors",
          "name": "DTI",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "dipy.tensors.TensorMode": {
          "inputs": {
            "bvals": null,
            "bvecs": null,
            "in_file": null,
            "mask_file": null,
            "out_filename": null
          },
          "module": "dipy.tensors",
          "name": "TensorMode",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "dipy.tracks.TrackDensityMap": {
          "inputs": {
            "data_dims": null,
            "in_file": null,
            "out_filename": "tdi.nii",
            "points_space": "rasmm",
            "reference": null,
            "voxel_dims": null
          },
          "module": "dipy.tracks",
          "name": "TrackDensityMap",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "elastix.registration.AnalyzeWarp": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "num_threads": null,
            "output_path": "./",
            "terminal_output": null,
            "transform_file": null
          },
          "module": "elastix.registration",
          "name": "AnalyzeWarp",
          "outputs": {
            "disp_field": null,
            "jacdet_map": null,
            "jacmat_map": null
          },
          "type": null
        },
        "elastix.registration.ApplyWarp": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "moving_image": null,
            "num_threads": null,
            "output_path": "./",
            "terminal_output": null,
            "transform_file": null
          },
          "module": "elastix.registration",
          "name": "ApplyWarp",
          "outputs": {
            "warped_file": null
          },
          "type": null
        },
        "elastix.registration.PointsWarp": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "num_threads": null,
            "output_path": "./",
            "points_file": null,
            "terminal_output": null,
            "transform_file": null
          },
          "module": "elastix.registration",
          "name": "PointsWarp",
          "outputs": {
            "warped_file": null
          },
          "type": null
        },
        "elastix.registration.Registration": {
          "inputs": {
            "args": null,
            "environ": {},
            "fixed_image": null,
            "fixed_mask": null,
            "ignore_exception": false,
            "initial_transform": null,
            "moving_image": null,
            "moving_mask": null,
            "num_threads": null,
            "output_path": "./",
            "parameters": null,
            "terminal_output": null
          },
          "module": "elastix.registration",
          "name": "Registration",
          "outputs": {
            "transform": null,
            "warped_file": null,
            "warped_files": null,
            "warped_files_flags": null
          },
          "type": null
        },
        "elastix.utils.EditTransform": {
          "inputs": {
            "ignore_exception": false,
            "interpolation": "cubic",
            "output_file": null,
            "output_format": null,
            "output_type": null,
            "reference_image": null,
            "transform_file": null
          },
          "module": "elastix.utils",
          "name": "EditTransform",
          "outputs": {
            "output_file": null
          },
          "type": null
        },
        "freesurfer.base.FSCommand": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "subjects_dir": null,
            "terminal_output": null
          },
          "module": "freesurfer.base",
          "name": "FSCommand",
          "outputs": {},
          "type": null
        },
        "freesurfer.model.Binarize": {
          "inputs": {
            "abs": null,
            "args": null,
            "bin_col_num": null,
            "bin_val": null,
            "bin_val_not": null,
            "binary_file": null,
            "count_file": null,
            "dilate": null,
            "environ": {},
            "erode": null,
            "erode2d": null,
            "frame_no": null,
            "ignore_exception": false,
            "in_file": null,
            "invert": null,
            "mask_file": null,
            "mask_thresh": null,
            "match": null,
            "max": null,
            "merge_file": null,
            "min": null,
            "out_type": null,
            "rmax": null,
            "rmin": null,
            "subjects_dir": null,
            "terminal_output": null,
            "ventricles": null,
            "wm": null,
            "wm_ven_csf": null,
            "zero_edges": null,
            "zero_slice_edge": null
          },
          "module": "freesurfer.model",
          "name": "Binarize",
          "outputs": {
            "binary_file": null,
            "count_file": null
          },
          "type": null
        },
        "freesurfer.model.Concatenate": {
          "inputs": {
            "add_val": null,
            "args": null,
            "combine": null,
            "concatenated_file": null,
            "environ": {},
            "gmean": null,
            "ignore_exception": false,
            "in_files": null,
            "keep_dtype": null,
            "mask_file": null,
            "max_bonfcor": null,
            "max_index": null,
            "mean_div_n": null,
            "multiply_by": null,
            "multiply_matrix_file": null,
            "paired_stats": null,
            "sign": null,
            "sort": null,
            "stats": null,
            "subjects_dir": null,
            "terminal_output": null,
            "vote": null
          },
          "module": "freesurfer.model",
          "name": "Concatenate",
          "outputs": {
            "concatenated_file": null
          },
          "type": null
        },
        "freesurfer.model.GLMFit": {
          "inputs": {
            "allow_ill_cond": null,
            "allow_repeated_subjects": null,
            "args": null,
            "calc_AR1": null,
            "check_opts": null,
            "compute_log_y": null,
            "contrast": null,
            "cortex": null,
            "debug": null,
            "design": null,
            "diag": null,
            "diag_cluster": null,
            "environ": {},
            "fixed_fx_dof": null,
            "fixed_fx_dof_file": null,
            "fixed_fx_var": null,
            "force_perm": null,
            "fsgd": null,
            "fwhm": null,
            "glm_dir": null,
            "hemi": null,
            "ignore_exception": false,
            "in_file": null,
            "invert_mask": null,
            "label_file": null,
            "mask_file": null,
            "no_contrast_sok": null,
            "no_est_fwhm": null,
            "no_mask_smooth": null,
            "no_prune": null,
            "one_sample": null,
            "pca": null,
            "per_voxel_reg": null,
            "profile": null,
            "prune": null,
            "prune_thresh": null,
            "resynth_test": null,
            "save_cond": null,
            "save_estimate": null,
            "save_res_corr_mtx": null,
            "save_residual": null,
            "seed": null,
            "self_reg": null,
            "sim_done_file": null,
            "sim_sign": null,
            "simulation": null,
            "subject_id": null,
            "subjects_dir": null,
            "surf": null,
            "surf_geo": "white",
            "synth": null,
            "terminal_output": null,
            "uniform": null,
            "var_fwhm": null,
            "vox_dump": null,
            "weight_file": null,
            "weight_inv": null,
            "weight_sqrt": null,
            "weighted_ls": null
          },
          "module": "freesurfer.model",
          "name": "GLMFit",
          "outputs": {
            "beta_file": null,
            "dof_file": null,
            "error_file": null,
            "error_stddev_file": null,
            "error_var_file": null,
            "estimate_file": null,
            "frame_eigenvectors": null,
            "ftest_file": null,
            "fwhm_file": null,
            "gamma_file": null,
            "gamma_var_file": null,
            "glm_dir": null,
            "mask_file": null,
            "sig_file": null,
            "singular_values": null,
            "spatial_eigenvectors": null,
            "svd_stats_file": null
          },
          "type": null
        },
        "freesurfer.model.Label2Vol": {
          "inputs": {
            "annot_file": null,
            "aparc_aseg": null,
            "args": null,
            "environ": {},
            "fill_thresh": null,
            "hemi": null,
            "identity": null,
            "ignore_exception": false,
            "invert_mtx": null,
            "label_file": null,
            "label_hit_file": null,
            "label_voxel_volume": null,
            "map_label_stat": null,
            "native_vox2ras": null,
            "proj": null,
            "reg_file": null,
            "reg_header": null,
            "seg_file": null,
            "subject_id": null,
            "subjects_dir": null,
            "surface": null,
            "template_file": null,
            "terminal_output": null,
            "vol_label_file": null
          },
          "module": "freesurfer.model",
          "name": "Label2Vol",
          "outputs": {
            "vol_label_file": null
          },
          "type": null
        },
        "freesurfer.model.MRISPreproc": {
          "inputs": {
            "args": null,
            "environ": {},
            "fsgd_file": null,
            "fwhm": null,
            "fwhm_source": null,
            "hemi": null,
            "ignore_exception": false,
            "num_iters": null,
            "num_iters_source": null,
            "out_file": null,
            "proj_frac": null,
            "smooth_cortex_only": null,
            "source_format": null,
            "subject_file": null,
            "subjects": null,
            "subjects_dir": null,
            "surf_area": null,
            "surf_dir": null,
            "surf_measure": null,
            "surf_measure_file": null,
            "target": null,
            "terminal_output": null,
            "vol_measure_file": null
          },
          "module": "freesurfer.model",
          "name": "MRISPreproc",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "freesurfer.model.MS_LDA": {
          "inputs": {
            "args": null,
            "conform": null,
            "environ": {},
            "ignore_exception": false,
            "images": null,
            "label_file": null,
            "lda_labels": null,
            "mask_file": null,
            "shift": null,
            "subjects_dir": null,
            "terminal_output": null,
            "use_weights": null,
            "vol_synth_file": null,
            "weight_file": null
          },
          "module": "freesurfer.model",
          "name": "MS_LDA",
          "outputs": {
            "vol_synth_file": null,
            "weight_file": null
          },
          "type": null
        },
        "freesurfer.model.OneSampleTTest": {
          "inputs": {
            "allow_ill_cond": null,
            "allow_repeated_subjects": null,
            "args": null,
            "calc_AR1": null,
            "check_opts": null,
            "compute_log_y": null,
            "contrast": null,
            "cortex": null,
            "debug": null,
            "design": null,
            "diag": null,
            "diag_cluster": null,
            "environ": {},
            "fixed_fx_dof": null,
            "fixed_fx_dof_file": null,
            "fixed_fx_var": null,
            "force_perm": null,
            "fsgd": null,
            "fwhm": null,
            "glm_dir": null,
            "hemi": null,
            "ignore_exception": false,
            "in_file": null,
            "invert_mask": null,
            "label_file": null,
            "mask_file": null,
            "no_contrast_sok": null,
            "no_est_fwhm": null,
            "no_mask_smooth": null,
            "no_prune": null,
            "one_sample": null,
            "pca": null,
            "per_voxel_reg": null,
            "profile": null,
            "prune": null,
            "prune_thresh": null,
            "resynth_test": null,
            "save_cond": null,
            "save_estimate": null,
            "save_res_corr_mtx": null,
            "save_residual": null,
            "seed": null,
            "self_reg": null,
            "sim_done_file": null,
            "sim_sign": null,
            "simulation": null,
            "subject_id": null,
            "subjects_dir": null,
            "surf": null,
            "surf_geo": "white",
            "synth": null,
            "terminal_output": null,
            "uniform": null,
            "var_fwhm": null,
            "vox_dump": null,
            "weight_file": null,
            "weight_inv": null,
            "weight_sqrt": null,
            "weighted_ls": null
          },
          "module": "freesurfer.model",
          "name": "OneSampleTTest",
          "outputs": {
            "beta_file": null,
            "dof_file": null,
            "error_file": null,
            "error_stddev_file": null,
            "error_var_file": null,
            "estimate_file": null,
            "frame_eigenvectors": null,
            "ftest_file": null,
            "fwhm_file": null,
            "gamma_file": null,
            "gamma_var_file": null,
            "glm_dir": null,
            "mask_file": null,
            "sig_file": null,
            "singular_values": null,
            "spatial_eigenvectors": null,
            "svd_stats_file": null
          },
          "type": null
        },
        "freesurfer.model.SegStats": {
          "inputs": {
            "annot": null,
            "args": null,
            "avgwf_file": null,
            "avgwf_txt_file": null,
            "brain_vol": null,
            "calc_power": null,
            "calc_snr": null,
            "color_table_file": null,
            "cortex_vol_from_surf": null,
            "default_color_table": null,
            "environ": {},
            "etiv": null,
            "etiv_only": null,
            "exclude_ctx_gm_wm": null,
            "exclude_id": null,
            "frame": null,
            "gca_color_table": null,
            "ignore_exception": false,
            "in_file": null,
            "mask_erode": null,
            "mask_file": null,
            "mask_frame": null,
            "mask_invert": null,
            "mask_sign": null,
            "mask_thresh": null,
            "multiply": null,
            "non_empty_only": null,
            "partial_volume_file": null,
            "segment_id": null,
            "segmentation_file": null,
            "sf_avg_file": null,
            "subjects_dir": null,
            "summary_file": null,
            "surf_label": null,
            "terminal_output": null,
            "vox": null,
            "wm_vol_from_surf": null
          },
          "module": "freesurfer.model",
          "name": "SegStats",
          "outputs": {
            "avgwf_file": null,
            "avgwf_txt_file": null,
            "sf_avg_file": null,
            "summary_file": null
          },
          "type": null
        },
        "freesurfer.preprocess.ApplyVolTransform": {
          "inputs": {
            "args": null,
            "environ": {},
            "fs_target": null,
            "fsl_reg_file": null,
            "ignore_exception": false,
            "interp": null,
            "inverse": null,
            "invert_morph": null,
            "m3z_file": null,
            "no_ded_m3z_path": null,
            "no_resample": null,
            "reg_file": null,
            "reg_header": null,
            "source_file": null,
            "subject": null,
            "subjects_dir": null,
            "tal": null,
            "tal_resolution": null,
            "target_file": null,
            "terminal_output": null,
            "transformed_file": null,
            "xfm_reg_file": null
          },
          "module": "freesurfer.preprocess",
          "name": "ApplyVolTransform",
          "outputs": {
            "transformed_file": null
          },
          "type": null
        },
        "freesurfer.preprocess.BBRegister": {
          "inputs": {
            "args": null,
            "contrast_type": null,
            "environ": {},
            "epi_mask": null,
            "ignore_exception": false,
            "init": null,
            "init_reg_file": null,
            "intermediate_file": null,
            "out_fsl_file": null,
            "out_reg_file": null,
            "reg_frame": null,
            "reg_middle_frame": null,
            "registered_file": null,
            "source_file": null,
            "spm_nifti": null,
            "subject_id": null,
            "subjects_dir": null,
            "terminal_output": null
          },
          "module": "freesurfer.preprocess",
          "name": "BBRegister",
          "outputs": {
            "min_cost_file": null,
            "out_fsl_file": null,
            "out_reg_file": null,
            "registered_file": null
          },
          "type": null
        },
        "freesurfer.preprocess.DICOMConvert": {
          "inputs": {
            "args": null,
            "base_output_dir": null,
            "dicom_dir": null,
            "dicom_info": null,
            "environ": {},
            "file_mapping": null,
            "ignore_exception": false,
            "ignore_single_slice": null,
            "out_type": "niigz",
            "seq_list": null,
            "subject_dir_template": "S.%04d",
            "subject_id": null,
            "subjects_dir": null,
            "terminal_output": null
          },
          "module": "freesurfer.preprocess",
          "name": "DICOMConvert",
          "outputs": {},
          "type": null
        },
        "freesurfer.preprocess.FitMSParams": {
          "inputs": {
            "args": null,
            "environ": {},
            "flip_list": null,
            "ignore_exception": false,
            "in_files": null,
            "out_dir": null,
            "subjects_dir": null,
            "te_list": null,
            "terminal_output": null,
            "tr_list": null,
            "xfm_list": null
          },
          "module": "freesurfer.preprocess",
          "name": "FitMSParams",
          "outputs": {
            "pd_image": null,
            "t1_image": null,
            "t2star_image": null
          },
          "type": null
        },
        "freesurfer.preprocess.MRIConvert": {
          "inputs": {
            "apply_inv_transform": null,
            "apply_transform": null,
            "args": null,
            "ascii": null,
            "autoalign_matrix": null,
            "color_file": null,
            "conform": null,
            "conform_min": null,
            "conform_size": null,
            "crop_center": null,
            "crop_gdf": null,
            "crop_size": null,
            "cut_ends": null,
            "devolve_transform": null,
            "drop_n": null,
            "environ": {},
            "fill_parcellation": null,
            "force_ras": null,
            "frame": null,
            "frame_subsample": null,
            "fwhm": null,
            "ignore_exception": false,
            "in_center": null,
            "in_file": null,
            "in_i_dir": null,
            "in_i_size": null,
            "in_info": null,
            "in_j_dir": null,
            "in_j_size": null,
            "in_k_dir": null,
            "in_k_size": null,
            "in_like": null,
            "in_matrix": null,
            "in_orientation": null,
            "in_scale": null,
            "in_stats": null,
            "in_type": null,
            "invert_contrast": null,
            "midframe": null,
            "no_change": null,
            "no_scale": null,
            "no_translate": null,
            "no_write": null,
            "out_center": null,
            "out_datatype": null,
            "out_file": null,
            "out_i_count": null,
            "out_i_dir": null,
            "out_i_size": null,
            "out_info": null,
            "out_j_count": null,
            "out_j_dir": null,
            "out_j_size": null,
            "out_k_count": null,
            "out_k_dir": null,
            "out_k_size": null,
            "out_matrix": null,
            "out_orientation": null,
            "out_scale": null,
            "out_stats": null,
            "out_type": null,
            "parse_only": null,
            "read_only": null,
            "reorder": null,
            "resample_type": null,
            "reslice_like": null,
            "sdcm_list": null,
            "skip_n": null,
            "slice_bias": null,
            "slice_crop": null,
            "slice_reverse": null,
            "smooth_parcellation": null,
            "sphinx": null,
            "split": null,
            "status_file": null,
            "subject_name": null,
            "subjects_dir": null,
            "te": null,
            "template_info": null,
            "template_type": null,
            "terminal_output": null,
            "ti": null,
            "tr": null,
            "unwarp_gradient": null,
            "vox_size": null,
            "zero_ge_z_offset": null,
            "zero_outlines": null
          },
          "module": "freesurfer.preprocess",
          "name": "MRIConvert",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "freesurfer.preprocess.ParseDICOMDir": {
          "inputs": {
            "args": null,
            "dicom_dir": null,
            "dicom_info_file": "dicominfo.txt",
            "environ": {},
            "ignore_exception": false,
            "sortbyrun": null,
            "subjects_dir": null,
            "summarize": null,
            "terminal_output": null
          },
          "module": "freesurfer.preprocess",
          "name": "ParseDICOMDir",
          "outputs": {
            "dicom_info_file": null
          },
          "type": null
        },
        "freesurfer.preprocess.ReconAll": {
          "inputs": {
            "T1_files": null,
            "T2_file": null,
            "args": null,
            "directive": "all",
            "environ": {},
            "flags": null,
            "hemi": null,
            "ignore_exception": false,
            "openmp": null,
            "subject_id": "recon_all",
            "subjects_dir": null,
            "terminal_output": null
          },
          "module": "freesurfer.preprocess",
          "name": "ReconAll",
          "outputs": {
            "BA_stats": null,
            "T1": null,
            "annot": null,
            "aparc_a2009s_stats": null,
            "aparc_aseg": null,
            "aparc_stats": null,
            "aseg": null,
            "aseg_stats": null,
            "brain": null,
            "brainmask": null,
            "curv": null,
            "curv_stats": null,
            "entorhinal_exvivo_stats": null,
            "filled": null,
            "inflated": null,
            "label": null,
            "norm": null,
            "nu": null,
            "orig": null,
            "pial": null,
            "rawavg": null,
            "ribbon": null,
            "smoothwm": null,
            "sphere": null,
            "sphere_reg": null,
            "subject_id": null,
            "subjects_dir": null,
            "sulc": null,
            "thickness": null,
            "volume": null,
            "white": null,
            "wm": null,
            "wmparc": null,
            "wmparc_stats": null
          },
          "type": null
        },
        "freesurfer.preprocess.Resample": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "resampled_file": null,
            "subjects_dir": null,
            "terminal_output": null,
            "voxel_size": null
          },
          "module": "freesurfer.preprocess",
          "name": "Resample",
          "outputs": {
            "resampled_file": null
          },
          "type": null
        },
        "freesurfer.preprocess.RobustRegister": {
          "inputs": {
            "args": null,
            "auto_sens": null,
            "environ": {},
            "est_int_scale": null,
            "force_double": null,
            "force_float": null,
            "half_source": null,
            "half_source_xfm": null,
            "half_targ": null,
            "half_targ_xfm": null,
            "half_weights": null,
            "high_iterations": null,
            "ignore_exception": false,
            "in_xfm_file": null,
            "init_orient": null,
            "iteration_thresh": null,
            "least_squares": null,
            "mask_source": null,
            "mask_target": null,
            "max_iterations": null,
            "no_init": null,
            "no_multi": null,
            "out_reg_file": null,
            "outlier_limit": null,
            "outlier_sens": null,
            "registered_file": null,
            "source_file": null,
            "subjects_dir": null,
            "subsample_thresh": null,
            "target_file": null,
            "terminal_output": null,
            "trans_only": null,
            "weights_file": null,
            "write_vo2vox": null
          },
          "module": "freesurfer.preprocess",
          "name": "RobustRegister",
          "outputs": {
            "half_source": null,
            "half_source_xfm": null,
            "half_targ": null,
            "half_targ_xfm": null,
            "half_weights": null,
            "out_reg_file": null,
            "registered_file": null,
            "weights_file": null
          },
          "type": null
        },
        "freesurfer.preprocess.Smooth": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "num_iters": null,
            "proj_frac": null,
            "proj_frac_avg": null,
            "reg_file": null,
            "smoothed_file": null,
            "subjects_dir": null,
            "surface_fwhm": null,
            "terminal_output": null,
            "vol_fwhm": null
          },
          "module": "freesurfer.preprocess",
          "name": "Smooth",
          "outputs": {
            "smoothed_file": null
          },
          "type": null
        },
        "freesurfer.preprocess.SynthesizeFLASH": {
          "inputs": {
            "args": null,
            "environ": {},
            "fixed_weighting": null,
            "flip_angle": null,
            "ignore_exception": false,
            "out_file": null,
            "pd_image": null,
            "subjects_dir": null,
            "t1_image": null,
            "te": null,
            "terminal_output": null,
            "tr": null
          },
          "module": "freesurfer.preprocess",
          "name": "SynthesizeFLASH",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "freesurfer.preprocess.UnpackSDICOMDir": {
          "inputs": {
            "args": null,
            "config": null,
            "dir_structure": null,
            "environ": {},
            "ignore_exception": false,
            "log_file": null,
            "no_info_dump": null,
            "no_unpack_err": null,
            "output_dir": null,
            "run_info": null,
            "scan_only": null,
            "seq_config": null,
            "source_dir": null,
            "spm_zeropad": null,
            "subjects_dir": null,
            "terminal_output": null
          },
          "module": "freesurfer.preprocess",
          "name": "UnpackSDICOMDir",
          "outputs": {},
          "type": null
        },
        "freesurfer.utils.ApplyMask": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "invert_xfm": null,
            "mask_file": null,
            "mask_thresh": null,
            "out_file": null,
            "subjects_dir": null,
            "terminal_output": null,
            "use_abs": null,
            "xfm_file": null,
            "xfm_source": null,
            "xfm_target": null
          },
          "module": "freesurfer.utils",
          "name": "ApplyMask",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "freesurfer.utils.ExtractMainComponent": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "terminal_output": null
          },
          "module": "freesurfer.utils",
          "name": "ExtractMainComponent",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "freesurfer.utils.ImageInfo": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "subjects_dir": null,
            "terminal_output": null
          },
          "module": "freesurfer.utils",
          "name": "ImageInfo",
          "outputs": {
            "TE": null,
            "TI": null,
            "TR": null,
            "data_type": null,
            "dimensions": null,
            "file_format": null,
            "info": null,
            "orientation": null,
            "out_file": null,
            "ph_enc_dir": null,
            "vox_sizes": null
          },
          "type": null
        },
        "freesurfer.utils.MRIMarchingCubes": {
          "inputs": {
            "args": null,
            "connectivity_value": 1,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "label_value": null,
            "out_file": null,
            "subjects_dir": null,
            "terminal_output": null
          },
          "module": "freesurfer.utils",
          "name": "MRIMarchingCubes",
          "outputs": {
            "surface": null
          },
          "type": null
        },
        "freesurfer.utils.MRIPretess": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_filled": null,
            "in_norm": null,
            "keep": null,
            "label": "wm",
            "nocorners": null,
            "out_file": null,
            "subjects_dir": null,
            "terminal_output": null,
            "test": null
          },
          "module": "freesurfer.utils",
          "name": "MRIPretess",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "freesurfer.utils.MRITessellate": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "label_value": null,
            "out_file": null,
            "subjects_dir": null,
            "terminal_output": null,
            "tesselate_all_voxels": null,
            "use_real_RAS_coordinates": null
          },
          "module": "freesurfer.utils",
          "name": "MRITessellate",
          "outputs": {
            "surface": null
          },
          "type": null
        },
        "freesurfer.utils.MRIsConvert": {
          "inputs": {
            "annot_file": null,
            "args": null,
            "dataarray_num": null,
            "environ": {},
            "functional_file": null,
            "ignore_exception": false,
            "in_file": null,
            "label_file": null,
            "labelstats_outfile": null,
            "normal": null,
            "origname": null,
            "out_datatype": null,
            "out_file": null,
            "parcstats_file": null,
            "patch": null,
            "rescale": null,
            "scalarcurv_file": null,
            "scale": null,
            "subjects_dir": null,
            "talairachxfm_subjid": null,
            "terminal_output": null,
            "vertex": null,
            "xyz_ascii": null
          },
          "module": "freesurfer.utils",
          "name": "MRIsConvert",
          "outputs": {
            "converted": null
          },
          "type": null
        },
        "freesurfer.utils.MakeAverageSubject": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "out_name": "average",
            "subjects_dir": null,
            "subjects_ids": null,
            "terminal_output": null
          },
          "module": "freesurfer.utils",
          "name": "MakeAverageSubject",
          "outputs": {
            "average_subject_name": null
          },
          "type": null
        },
        "freesurfer.utils.SampleToSurface": {
          "inputs": {
            "apply_rot": null,
            "apply_trans": null,
            "args": null,
            "cortex_mask": null,
            "environ": {},
            "fix_tk_reg": null,
            "float2int_method": null,
            "frame": null,
            "hemi": null,
            "hits_file": null,
            "hits_type": null,
            "ico_order": null,
            "ignore_exception": false,
            "interp_method": null,
            "mask_label": null,
            "mni152reg": null,
            "no_reshape": null,
            "out_file": null,
            "out_type": null,
            "override_reg_subj": null,
            "projection_stem": null,
            "reference_file": null,
            "reg_file": null,
            "reg_header": null,
            "reshape": null,
            "reshape_slices": null,
            "sampling_method": null,
            "sampling_range": null,
            "sampling_units": null,
            "scale_input": null,
            "smooth_surf": null,
            "smooth_vol": null,
            "source_file": null,
            "subject_id": null,
            "subjects_dir": null,
            "surf_reg": null,
            "surface": null,
            "target_subject": null,
            "terminal_output": null,
            "vox_file": null
          },
          "module": "freesurfer.utils",
          "name": "SampleToSurface",
          "outputs": {
            "hits_file": null,
            "out_file": null,
            "vox_file": null
          },
          "type": null
        },
        "freesurfer.utils.SmoothTessellation": {
          "inputs": {
            "args": null,
            "curvature_averaging_iterations": 10,
            "disable_estimates": null,
            "environ": {},
            "gaussian_curvature_norm_steps": null,
            "gaussian_curvature_smoothing_steps": null,
            "ignore_exception": false,
            "in_file": null,
            "normalize_area": null,
            "out_area_file": null,
            "out_curvature_file": null,
            "out_file": null,
            "smoothing_iterations": 10,
            "snapshot_writing_iterations": null,
            "subjects_dir": null,
            "terminal_output": null,
            "use_gaussian_curvature_smoothing": null,
            "use_momentum": null
          },
          "module": "freesurfer.utils",
          "name": "SmoothTessellation",
          "outputs": {
            "surface": null
          },
          "type": null
        },
        "freesurfer.utils.Surface2VolTransform": {
          "inputs": {
            "args": null,
            "environ": {},
            "hemi": null,
            "ignore_exception": false,
            "mkmask": null,
            "projfrac": null,
            "reg_file": null,
            "source_file": null,
            "subject_id": null,
            "subjects_dir": null,
            "surf_name": null,
            "template_file": null,
            "terminal_output": null,
            "transformed_file": null,
            "vertexvol_file": null
          },
          "module": "freesurfer.utils",
          "name": "Surface2VolTransform",
          "outputs": {
            "transformed_file": null,
            "vertexvol_file": null
          },
          "type": null
        },
        "freesurfer.utils.SurfaceSmooth": {
          "inputs": {
            "args": null,
            "cortex": true,
            "environ": {},
            "fwhm": null,
            "hemi": null,
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "reshape": null,
            "smooth_iters": null,
            "subject_id": null,
            "subjects_dir": null,
            "terminal_output": null
          },
          "module": "freesurfer.utils",
          "name": "SurfaceSmooth",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "freesurfer.utils.SurfaceSnapshots": {
          "inputs": {
            "annot_file": null,
            "annot_name": null,
            "args": null,
            "colortable": null,
            "demean_overlay": null,
            "environ": {},
            "hemi": null,
            "identity_reg": null,
            "ignore_exception": false,
            "invert_overlay": null,
            "label_file": null,
            "label_name": null,
            "label_outline": null,
            "label_under": null,
            "mni152_reg": null,
            "orig_suffix": null,
            "overlay": null,
            "overlay_range": null,
            "overlay_range_offset": null,
            "overlay_reg": null,
            "patch_file": null,
            "reverse_overlay": null,
            "screenshot_stem": null,
            "show_color_scale": null,
            "show_color_text": null,
            "show_curv": null,
            "show_gray_curv": null,
            "six_images": null,
            "sphere_suffix": null,
            "stem_template_args": null,
            "subject_id": null,
            "subjects_dir": null,
            "surface": null,
            "tcl_script": null,
            "terminal_output": null,
            "truncate_overlay": null
          },
          "module": "freesurfer.utils",
          "name": "SurfaceSnapshots",
          "outputs": {
            "snapshots": null
          },
          "type": null
        },
        "freesurfer.utils.SurfaceTransform": {
          "inputs": {
            "args": null,
            "environ": {},
            "hemi": null,
            "ignore_exception": false,
            "out_file": null,
            "reshape": null,
            "reshape_factor": null,
            "source_annot_file": null,
            "source_file": null,
            "source_subject": null,
            "source_type": null,
            "subjects_dir": null,
            "target_ico_order": null,
            "target_subject": null,
            "target_type": null,
            "terminal_output": null
          },
          "module": "freesurfer.utils",
          "name": "SurfaceTransform",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "freesurfer.utils.Tkregister2": {
          "inputs": {
            "args": null,
            "environ": {},
            "fsl_in_matrix": null,
            "fsl_out": null,
            "fstal": null,
            "fstarg": null,
            "ignore_exception": false,
            "moving_image": null,
            "movscale": null,
            "noedit": true,
            "reg_file": "register.dat",
            "reg_header": null,
            "subject_id": null,
            "subjects_dir": null,
            "target_image": null,
            "terminal_output": null,
            "xfm": null
          },
          "module": "freesurfer.utils",
          "name": "Tkregister2",
          "outputs": {
            "fsl_file": null,
            "reg_file": null
          },
          "type": null
        },
        "fsl.base.FSLCommand": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.base",
          "name": "FSLCommand",
          "outputs": {},
          "type": null
        },
        "fsl.dti.BEDPOSTX": {
          "inputs": {
            "all_ard": null,
            "args": null,
            "bpx_directory": "bedpostx",
            "burn_in": null,
            "burn_in_no_ard": null,
            "burn_period": null,
            "bvals": null,
            "bvecs": null,
            "dwi": null,
            "environ": {},
            "fibres": null,
            "force_dir": true,
            "fudge": null,
            "gradnonlin": null,
            "ignore_exception": false,
            "jumps": null,
            "logdir": "logdir",
            "mask": null,
            "model": null,
            "n_fibres": null,
            "n_jumps": null,
            "nlgradient": null,
            "no_ard": null,
            "no_cuda": null,
            "no_spat": null,
            "non_linear": null,
            "output_type": null,
            "sample_every": null,
            "sampling": null,
            "seed": null,
            "terminal_output": null,
            "update_proposal_every": null,
            "weight": null
          },
          "module": "fsl.dti",
          "name": "BEDPOSTX",
          "outputs": {
            "bpx_out_directory": null,
            "dyads": null,
            "mean_fsamples": null,
            "mean_phsamples": null,
            "mean_thsamples": null,
            "merged_fsamples": null,
            "merged_phsamples": null,
            "merged_thsamples": null,
            "xfms_directory": null
          },
          "type": null
        },
        "fsl.dti.BEDPOSTX4": {
          "inputs": {
            "all_ard": null,
            "args": null,
            "bpx_directory": "bedpostx",
            "burn_in": null,
            "burn_in_no_ard": null,
            "burn_period": null,
            "bvals": null,
            "bvecs": null,
            "dwi": null,
            "environ": {},
            "fibres": null,
            "force_dir": true,
            "fudge": null,
            "gradnonlin": null,
            "ignore_exception": false,
            "jumps": null,
            "logdir": "logdir",
            "mask": null,
            "model": null,
            "n_fibres": null,
            "n_jumps": null,
            "nlgradient": null,
            "no_ard": null,
            "no_cuda": null,
            "no_spat": null,
            "non_linear": null,
            "output_type": null,
            "sample_every": null,
            "sampling": null,
            "seed": null,
            "terminal_output": null,
            "update_proposal_every": null,
            "weight": null
          },
          "module": "fsl.dti",
          "name": "BEDPOSTX4",
          "outputs": {
            "bpx_out_directory": null,
            "dyads": null,
            "mean_fsamples": null,
            "mean_phsamples": null,
            "mean_thsamples": null,
            "merged_fsamples": null,
            "merged_phsamples": null,
            "merged_thsamples": null,
            "xfms_directory": null
          },
          "type": null
        },
        "fsl.dti.BEDPOSTX5": {
          "inputs": {
            "all_ard": null,
            "args": null,
            "burn_in": null,
            "burn_in_no_ard": null,
            "bvals": null,
            "bvecs": null,
            "cnlinear": null,
            "dwi": null,
            "environ": {},
            "f0_ard": null,
            "f0_noard": null,
            "force_dir": true,
            "fudge": null,
            "gradnonlin": null,
            "ignore_exception": false,
            "logdir": null,
            "mask": null,
            "model": null,
            "n_fibres": 1,
            "n_jumps": null,
            "no_ard": null,
            "no_spat": null,
            "non_linear": null,
            "out_dir": "bedpostx",
            "output_type": null,
            "rician": null,
            "sample_every": null,
            "seed": null,
            "terminal_output": null,
            "update_proposal_every": null,
            "use_gpu": null
          },
          "module": "fsl.dti",
          "name": "BEDPOSTX5",
          "outputs": {
            "dyads": null,
            "dyads_dispersion": null,
            "mean_S0samples": null,
            "mean_dsamples": null,
            "mean_fsamples": null,
            "mean_phsamples": null,
            "mean_thsamples": null,
            "merged_fsamples": null,
            "merged_phsamples": null,
            "merged_thsamples": null
          },
          "type": null
        },
        "fsl.dti.DTIFit": {
          "inputs": {
            "args": null,
            "base_name": "dtifit_",
            "bvals": null,
            "bvecs": null,
            "cni": null,
            "dwi": null,
            "environ": {},
            "gradnonlin": null,
            "ignore_exception": false,
            "little_bit": null,
            "mask": null,
            "max_x": null,
            "max_y": null,
            "max_z": null,
            "min_x": null,
            "min_y": null,
            "min_z": null,
            "output_type": null,
            "save_tensor": null,
            "sse": null,
            "terminal_output": null
          },
          "module": "fsl.dti",
          "name": "DTIFit",
          "outputs": {
            "FA": null,
            "L1": null,
            "L2": null,
            "L3": null,
            "MD": null,
            "MO": null,
            "S0": null,
            "V1": null,
            "V2": null,
            "V3": null,
            "tensor": null
          },
          "type": null
        },
        "fsl.dti.DistanceMap": {
          "inputs": {
            "args": null,
            "distance_map": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "invert_input": null,
            "local_max_file": null,
            "mask_file": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.dti",
          "name": "DistanceMap",
          "outputs": {
            "distance_map": null,
            "local_max_file": null
          },
          "type": null
        },
        "fsl.dti.FSLXCommand": {
          "inputs": {
            "all_ard": null,
            "args": null,
            "burn_in": null,
            "burn_in_no_ard": null,
            "bvals": null,
            "bvecs": null,
            "cnlinear": null,
            "dwi": null,
            "environ": {},
            "f0_ard": null,
            "f0_noard": null,
            "force_dir": true,
            "fudge": null,
            "ignore_exception": false,
            "logdir": ".",
            "mask": null,
            "model": null,
            "n_fibres": 1,
            "n_jumps": null,
            "no_ard": null,
            "no_spat": null,
            "non_linear": null,
            "output_type": null,
            "rician": null,
            "sample_every": null,
            "seed": null,
            "terminal_output": null,
            "update_proposal_every": null
          },
          "module": "fsl.dti",
          "name": "FSLXCommand",
          "outputs": {
            "dyads": null,
            "fsamples": null,
            "mean_S0samples": null,
            "mean_dsamples": null,
            "mean_fsamples": null,
            "mean_tausamples": null,
            "phsamples": null,
            "thsamples": null
          },
          "type": null
        },
        "fsl.dti.FindTheBiggest": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_files": null,
            "out_file": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.dti",
          "name": "FindTheBiggest",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.dti.MakeDyadicVectors": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "mask": null,
            "output": "dyads",
            "output_type": null,
            "perc": null,
            "phi_vol": null,
            "terminal_output": null,
            "theta_vol": null
          },
          "module": "fsl.dti",
          "name": "MakeDyadicVectors",
          "outputs": {
            "dispersion": null,
            "dyads": null
          },
          "type": null
        },
        "fsl.dti.ProbTrackX": {
          "inputs": {
            "args": null,
            "avoid_mp": null,
            "c_thresh": null,
            "correct_path_distribution": null,
            "dist_thresh": null,
            "environ": {},
            "fibst": null,
            "force_dir": true,
            "fsamples": null,
            "ignore_exception": false,
            "inv_xfm": null,
            "loop_check": null,
            "mask": null,
            "mask2": null,
            "mesh": null,
            "mod_euler": null,
            "mode": null,
            "n_samples": 5000,
            "n_steps": null,
            "network": null,
            "opd": true,
            "os2t": null,
            "out_dir": null,
            "output_type": null,
            "phsamples": null,
            "rand_fib": null,
            "random_seed": null,
            "s2tastext": null,
            "sample_random_points": null,
            "samples_base_name": "merged",
            "seed": null,
            "seed_ref": null,
            "step_length": null,
            "stop_mask": null,
            "target_masks": null,
            "terminal_output": null,
            "thsamples": null,
            "use_anisotropy": null,
            "verbose": null,
            "waypoints": null,
            "xfm": null
          },
          "module": "fsl.dti",
          "name": "ProbTrackX",
          "outputs": {
            "fdt_paths": null,
            "log": null,
            "particle_files": null,
            "targets": null,
            "way_total": null
          },
          "type": null
        },
        "fsl.dti.ProbTrackX2": {
          "inputs": {
            "args": null,
            "avoid_mp": null,
            "c_thresh": null,
            "colmask4": null,
            "correct_path_distribution": null,
            "dist_thresh": null,
            "distthresh1": null,
            "distthresh3": null,
            "environ": {},
            "fibst": null,
            "fopd": null,
            "force_dir": true,
            "fsamples": null,
            "ignore_exception": false,
            "inv_xfm": null,
            "loop_check": null,
            "lrtarget3": null,
            "mask": null,
            "meshspace": null,
            "mod_euler": null,
            "n_samples": 5000,
            "n_steps": null,
            "network": null,
            "omatrix1": null,
            "omatrix2": null,
            "omatrix3": null,
            "omatrix4": null,
            "onewaycondition": null,
            "opd": true,
            "os2t": null,
            "out_dir": null,
            "output_type": null,
            "phsamples": null,
            "rand_fib": null,
            "random_seed": null,
            "s2tastext": null,
            "sample_random_points": null,
            "samples_base_name": "merged",
            "seed": null,
            "seed_ref": null,
            "simple": null,
            "step_length": null,
            "stop_mask": null,
            "target2": null,
            "target3": null,
            "target4": null,
            "target_masks": null,
            "terminal_output": null,
            "thsamples": null,
            "use_anisotropy": null,
            "verbose": null,
            "waycond": null,
            "wayorder": null,
            "waypoints": null,
            "xfm": null
          },
          "module": "fsl.dti",
          "name": "ProbTrackX2",
          "outputs": {
            "fdt_paths": null,
            "log": null,
            "lookup_tractspace": null,
            "matrix1_dot": null,
            "matrix2_dot": null,
            "matrix3_dot": null,
            "network_matrix": null,
            "particle_files": null,
            "targets": null,
            "way_total": null
          },
          "type": null
        },
        "fsl.dti.ProjThresh": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_files": null,
            "output_type": null,
            "terminal_output": null,
            "threshold": null
          },
          "module": "fsl.dti",
          "name": "ProjThresh",
          "outputs": {
            "out_files": null
          },
          "type": null
        },
        "fsl.dti.TractSkeleton": {
          "inputs": {
            "alt_data_file": null,
            "alt_skeleton": null,
            "args": null,
            "data_file": null,
            "distance_map": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "output_type": null,
            "project_data": null,
            "projected_data": null,
            "search_mask_file": null,
            "skeleton_file": null,
            "terminal_output": null,
            "threshold": null,
            "use_cingulum_mask": true
          },
          "module": "fsl.dti",
          "name": "TractSkeleton",
          "outputs": {
            "projected_data": null,
            "skeleton_file": null
          },
          "type": null
        },
        "fsl.dti.VecReg": {
          "inputs": {
            "affine_mat": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "interpolation": null,
            "mask": null,
            "out_file": null,
            "output_type": null,
            "ref_mask": null,
            "ref_vol": null,
            "rotation_mat": null,
            "rotation_warp": null,
            "terminal_output": null,
            "warp_field": null
          },
          "module": "fsl.dti",
          "name": "VecReg",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.dti.XFibres": {
          "inputs": {
            "all_ard": null,
            "args": null,
            "burn_in": null,
            "burn_in_no_ard": null,
            "bvals": null,
            "bvecs": null,
            "dwi": null,
            "environ": {},
            "force_dir": true,
            "fudge": null,
            "gradnonlin": null,
            "ignore_exception": false,
            "logdir": "logdir",
            "mask": null,
            "model": null,
            "n_fibres": null,
            "n_jumps": null,
            "no_ard": null,
            "no_spat": null,
            "non_linear": null,
            "output_type": null,
            "sample_every": null,
            "seed": null,
            "terminal_output": null,
            "update_proposal_every": null
          },
          "module": "fsl.dti",
          "name": "XFibres",
          "outputs": {
            "dyads": null,
            "fsamples": null,
            "mean_S0samples": null,
            "mean_dsamples": null,
            "mean_fsamples": null,
            "phsamples": null,
            "thsamples": null
          },
          "type": null
        },
        "fsl.dti.XFibres4": {
          "inputs": {
            "all_ard": null,
            "args": null,
            "burn_in": null,
            "burn_in_no_ard": null,
            "bvals": null,
            "bvecs": null,
            "dwi": null,
            "environ": {},
            "force_dir": true,
            "fudge": null,
            "gradnonlin": null,
            "ignore_exception": false,
            "logdir": "logdir",
            "mask": null,
            "model": null,
            "n_fibres": null,
            "n_jumps": null,
            "no_ard": null,
            "no_spat": null,
            "non_linear": null,
            "output_type": null,
            "sample_every": null,
            "seed": null,
            "terminal_output": null,
            "update_proposal_every": null
          },
          "module": "fsl.dti",
          "name": "XFibres4",
          "outputs": {
            "dyads": null,
            "fsamples": null,
            "mean_S0samples": null,
            "mean_dsamples": null,
            "mean_fsamples": null,
            "phsamples": null,
            "thsamples": null
          },
          "type": null
        },
        "fsl.dti.XFibres5": {
          "inputs": {
            "all_ard": null,
            "args": null,
            "burn_in": null,
            "burn_in_no_ard": null,
            "bvals": null,
            "bvecs": null,
            "cnlinear": null,
            "dwi": null,
            "environ": {},
            "f0_ard": null,
            "f0_noard": null,
            "force_dir": true,
            "fudge": null,
            "gradnonlin": null,
            "ignore_exception": false,
            "logdir": ".",
            "mask": null,
            "model": null,
            "n_fibres": 1,
            "n_jumps": null,
            "no_ard": null,
            "no_spat": null,
            "non_linear": null,
            "output_type": null,
            "rician": null,
            "sample_every": null,
            "seed": null,
            "terminal_output": null,
            "update_proposal_every": null
          },
          "module": "fsl.dti",
          "name": "XFibres5",
          "outputs": {
            "dyads": null,
            "fsamples": null,
            "mean_S0samples": null,
            "mean_dsamples": null,
            "mean_fsamples": null,
            "mean_tausamples": null,
            "phsamples": null,
            "thsamples": null
          },
          "type": null
        },
        "fsl.epi.ApplyTOPUP": {
          "inputs": {
            "args": null,
            "datatype": null,
            "encoding_file": null,
            "environ": {},
            "ignore_exception": false,
            "in_files": null,
            "in_index": null,
            "in_topup_fieldcoef": null,
            "in_topup_movpar": null,
            "interp": null,
            "method": null,
            "out_corrected": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.epi",
          "name": "ApplyTOPUP",
          "outputs": {
            "out_corrected": null
          },
          "type": null
        },
        "fsl.epi.EPIDeWarp": {
          "inputs": {
            "args": null,
            "cleanup": null,
            "dph_file": null,
            "environ": {},
            "epi_file": null,
            "epidw": null,
            "esp": 0.58,
            "exf_file": null,
            "exfdw": null,
            "ignore_exception": false,
            "mag_file": null,
            "nocleanup": true,
            "output_type": null,
            "sigma": 2,
            "tediff": 2.46,
            "terminal_output": null,
            "tmpdir": null,
            "vsm": null
          },
          "module": "fsl.epi",
          "name": "EPIDeWarp",
          "outputs": {
            "exf_mask": null,
            "exfdw": null,
            "unwarped_file": null,
            "vsm_file": null
          },
          "type": null
        },
        "fsl.epi.Eddy": {
          "inputs": {
            "args": null,
            "environ": {},
            "flm": null,
            "fwhm": null,
            "ignore_exception": false,
            "in_acqp": null,
            "in_bval": null,
            "in_bvec": null,
            "in_file": null,
            "in_index": null,
            "in_mask": null,
            "in_topup_fieldcoef": null,
            "in_topup_movpar": null,
            "method": null,
            "niter": null,
            "num_threads": 1,
            "out_base": "eddy_corrected",
            "output_type": null,
            "repol": null,
            "session": null,
            "terminal_output": null
          },
          "module": "fsl.epi",
          "name": "Eddy",
          "outputs": {
            "out_corrected": null,
            "out_parameter": null
          },
          "type": null
        },
        "fsl.epi.EddyCorrect": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "output_type": null,
            "ref_num": 0,
            "terminal_output": null
          },
          "module": "fsl.epi",
          "name": "EddyCorrect",
          "outputs": {
            "eddy_corrected": null
          },
          "type": null
        },
        "fsl.epi.EpiReg": {
          "inputs": {
            "args": null,
            "echospacing": null,
            "environ": {},
            "epi": null,
            "fmap": null,
            "fmapmag": null,
            "fmapmagbrain": null,
            "ignore_exception": false,
            "no_clean": null,
            "no_fmapreg": null,
            "out_base": "epi2struct",
            "output_type": null,
            "pedir": null,
            "t1_brain": null,
            "t1_head": null,
            "terminal_output": null,
            "weight_image": null,
            "wmseg": null
          },
          "module": "fsl.epi",
          "name": "EpiReg",
          "outputs": {
            "epi2str_inv": null,
            "epi2str_mat": null,
            "fmap2epi_mat": null,
            "fmap2str_mat": null,
            "fmap_epi": null,
            "fmap_str": null,
            "fmapmag_str": null,
            "fullwarp": null,
            "out_1vol": null,
            "out_file": null,
            "shiftmap": null,
            "wmedge": null,
            "wmseg": null
          },
          "type": null
        },
        "fsl.epi.PrepareFieldmap": {
          "inputs": {
            "args": null,
            "delta_TE": 2.46,
            "environ": {},
            "ignore_exception": false,
            "in_magnitude": null,
            "in_phase": null,
            "nocheck": false,
            "out_fieldmap": null,
            "output_type": null,
            "scanner": "SIEMENS",
            "terminal_output": null
          },
          "module": "fsl.epi",
          "name": "PrepareFieldmap",
          "outputs": {
            "out_fieldmap": null
          },
          "type": null
        },
        "fsl.epi.SigLoss": {
          "inputs": {
            "args": null,
            "echo_time": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask_file": null,
            "out_file": null,
            "output_type": null,
            "slice_direction": null,
            "terminal_output": null
          },
          "module": "fsl.epi",
          "name": "SigLoss",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.epi.TOPUP": {
          "inputs": {
            "args": null,
            "config": "b02b0.cnf",
            "encoding_direction": null,
            "encoding_file": null,
            "environ": {},
            "estmov": null,
            "fwhm": null,
            "ignore_exception": false,
            "in_file": null,
            "interp": null,
            "max_iter": null,
            "minmet": null,
            "numprec": null,
            "out_base": null,
            "out_corrected": null,
            "out_field": null,
            "out_logfile": null,
            "output_type": null,
            "readout_times": null,
            "reg_lambda": null,
            "regmod": null,
            "regrid": null,
            "scale": null,
            "splineorder": null,
            "ssqlambda": null,
            "subsamp": null,
            "terminal_output": null,
            "warp_res": null
          },
          "module": "fsl.epi",
          "name": "TOPUP",
          "outputs": {
            "out_corrected": null,
            "out_enc_file": null,
            "out_field": null,
            "out_fieldcoef": null,
            "out_logfile": null,
            "out_movpar": null
          },
          "type": null
        },
        "fsl.maths.ApplyMask": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "mask_file": null,
            "nan2zeros": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "ApplyMask",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.BinaryMaths": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "nan2zeros": null,
            "operand_file": null,
            "operand_value": null,
            "operation": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "BinaryMaths",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.ChangeDataType": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "nan2zeros": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "ChangeDataType",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.DilateImage": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "kernel_file": null,
            "kernel_shape": null,
            "kernel_size": null,
            "nan2zeros": null,
            "operation": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "DilateImage",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.ErodeImage": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "kernel_file": null,
            "kernel_shape": null,
            "kernel_size": null,
            "minimum_filter": false,
            "nan2zeros": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "ErodeImage",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.IsotropicSmooth": {
          "inputs": {
            "args": null,
            "environ": {},
            "fwhm": null,
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "nan2zeros": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "sigma": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "IsotropicSmooth",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.MathsCommand": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "nan2zeros": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "MathsCommand",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.MaxImage": {
          "inputs": {
            "args": null,
            "dimension": "T",
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "nan2zeros": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "MaxImage",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.MeanImage": {
          "inputs": {
            "args": null,
            "dimension": "T",
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "nan2zeros": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "MeanImage",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.MultiImageMaths": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "nan2zeros": null,
            "op_string": null,
            "operand_files": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "MultiImageMaths",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.SpatialFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "kernel_file": null,
            "kernel_shape": null,
            "kernel_size": null,
            "nan2zeros": null,
            "operation": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "SpatialFilter",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.TemporalFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "highpass_sigma": -1,
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "lowpass_sigma": -1,
            "nan2zeros": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "TemporalFilter",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.Threshold": {
          "inputs": {
            "args": null,
            "direction": "below",
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "nan2zeros": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null,
            "thresh": null,
            "use_nonzero_voxels": null,
            "use_robust_range": null
          },
          "module": "fsl.maths",
          "name": "Threshold",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.maths.UnaryMaths": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "internal_datatype": null,
            "nan2zeros": null,
            "operation": null,
            "out_file": null,
            "output_datatype": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.maths",
          "name": "UnaryMaths",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.model.Cluster": {
          "inputs": {
            "args": null,
            "connectivity": null,
            "cope_file": null,
            "dlh": null,
            "environ": {},
            "find_min": null,
            "fractional": null,
            "ignore_exception": false,
            "in_file": null,
            "minclustersize": null,
            "no_table": null,
            "num_maxima": null,
            "out_index_file": null,
            "out_localmax_txt_file": null,
            "out_localmax_vol_file": null,
            "out_max_file": null,
            "out_mean_file": null,
            "out_pval_file": null,
            "out_size_file": null,
            "out_threshold_file": null,
            "output_type": null,
            "peak_distance": null,
            "pthreshold": null,
            "std_space_file": null,
            "terminal_output": null,
            "threshold": null,
            "use_mm": null,
            "volume": null,
            "warpfield_file": null,
            "xfm_file": null
          },
          "module": "fsl.model",
          "name": "Cluster",
          "outputs": {
            "index_file": null,
            "localmax_txt_file": null,
            "localmax_vol_file": null,
            "max_file": null,
            "mean_file": null,
            "pval_file": null,
            "size_file": null,
            "threshold_file": null
          },
          "type": null
        },
        "fsl.model.ContrastMgr": {
          "inputs": {
            "args": null,
            "contrast_num": null,
            "corrections": null,
            "dof_file": null,
            "environ": {},
            "fcon_file": null,
            "ignore_exception": false,
            "output_type": null,
            "param_estimates": null,
            "sigmasquareds": null,
            "suffix": null,
            "tcon_file": null,
            "terminal_output": null
          },
          "module": "fsl.model",
          "name": "ContrastMgr",
          "outputs": {
            "copes": null,
            "fstats": null,
            "neffs": null,
            "tstats": null,
            "varcopes": null,
            "zfstats": null,
            "zstats": null
          },
          "type": null
        },
        "fsl.model.FEAT": {
          "inputs": {
            "args": null,
            "environ": {},
            "fsf_file": null,
            "ignore_exception": false,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.model",
          "name": "FEAT",
          "outputs": {
            "feat_dir": null
          },
          "type": null
        },
        "fsl.model.FEATModel": {
          "inputs": {
            "args": null,
            "environ": {},
            "ev_files": null,
            "fsf_file": null,
            "ignore_exception": false,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.model",
          "name": "FEATModel",
          "outputs": {
            "con_file": null,
            "design_cov": null,
            "design_file": null,
            "design_image": null,
            "fcon_file": null
          },
          "type": null
        },
        "fsl.model.FEATRegister": {
          "inputs": {
            "feat_dirs": null,
            "ignore_exception": false,
            "reg_dof": 12,
            "reg_image": null
          },
          "module": "fsl.model",
          "name": "FEATRegister",
          "outputs": {
            "fsf_file": null
          },
          "type": null
        },
        "fsl.model.FILMGLS": {
          "inputs": {
            "args": null,
            "autocorr_estimate_only": null,
            "autocorr_noestimate": null,
            "brightness_threshold": null,
            "design_file": null,
            "environ": {},
            "fit_armodel": null,
            "full_data": null,
            "ignore_exception": false,
            "in_file": null,
            "mask_size": null,
            "multitaper_product": null,
            "output_pwdata": null,
            "output_type": null,
            "results_dir": "results",
            "smooth_autocorr": null,
            "terminal_output": null,
            "threshold": 0.0,
            "tukey_window": null,
            "use_pava": null
          },
          "module": "fsl.model",
          "name": "FILMGLS",
          "outputs": {
            "corrections": null,
            "dof_file": null,
            "logfile": null,
            "param_estimates": null,
            "residual4d": null,
            "results_dir": null,
            "sigmasquareds": null,
            "thresholdac": null
          },
          "type": null
        },
        "fsl.model.FLAMEO": {
          "inputs": {
            "args": null,
            "burnin": null,
            "cope_file": null,
            "cov_split_file": null,
            "design_file": null,
            "dof_var_cope_file": null,
            "environ": {},
            "f_con_file": null,
            "fix_mean": null,
            "ignore_exception": false,
            "infer_outliers": null,
            "log_dir": "stats",
            "mask_file": null,
            "n_jumps": null,
            "no_pe_outputs": null,
            "outlier_iter": null,
            "output_type": null,
            "run_mode": null,
            "sample_every": null,
            "sigma_dofs": null,
            "t_con_file": null,
            "terminal_output": null,
            "var_cope_file": null
          },
          "module": "fsl.model",
          "name": "FLAMEO",
          "outputs": {
            "copes": null,
            "fstats": null,
            "mrefvars": null,
            "pes": null,
            "res4d": null,
            "stats_dir": null,
            "tdof": null,
            "tstats": null,
            "var_copes": null,
            "weights": null,
            "zfstats": null,
            "zstats": null
          },
          "type": null
        },
        "fsl.model.GLM": {
          "inputs": {
            "args": null,
            "contrasts": null,
            "dat_norm": null,
            "demean": null,
            "des_norm": null,
            "design": null,
            "dof": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "out_cope": null,
            "out_data_name": null,
            "out_f_name": null,
            "out_file": null,
            "out_p_name": null,
            "out_pf_name": null,
            "out_res_name": null,
            "out_sigsq_name": null,
            "out_t_name": null,
            "out_varcb_name": null,
            "out_vnscales_name": null,
            "out_z_name": null,
            "output_type": null,
            "terminal_output": null,
            "var_norm": null
          },
          "module": "fsl.model",
          "name": "GLM",
          "outputs": {
            "out_cope": null,
            "out_data": null,
            "out_f": null,
            "out_file": null,
            "out_p": null,
            "out_pf": null,
            "out_res": null,
            "out_sigsq": null,
            "out_t": null,
            "out_varcb": null,
            "out_vnscales": null,
            "out_z": null
          },
          "type": null
        },
        "fsl.model.L2Model": {
          "inputs": {
            "ignore_exception": false,
            "num_copes": null
          },
          "module": "fsl.model",
          "name": "L2Model",
          "outputs": {
            "design_con": null,
            "design_grp": null,
            "design_mat": null
          },
          "type": null
        },
        "fsl.model.Level1Design": {
          "inputs": {
            "bases": null,
            "contrasts": null,
            "ignore_exception": false,
            "interscan_interval": null,
            "model_serial_correlations": null,
            "session_info": null
          },
          "module": "fsl.model",
          "name": "Level1Design",
          "outputs": {
            "ev_files": null,
            "fsf_files": null
          },
          "type": null
        },
        "fsl.model.MELODIC": {
          "inputs": {
            "ICs": null,
            "approach": null,
            "args": null,
            "bg_image": null,
            "bg_threshold": null,
            "cov_weight": null,
            "dim": null,
            "dim_est": null,
            "environ": {},
            "epsilon": null,
            "epsilonS": null,
            "ignore_exception": false,
            "in_files": null,
            "log_power": null,
            "mask": null,
            "max_restart": null,
            "maxit": null,
            "mix": null,
            "mm_thresh": null,
            "no_bet": null,
            "no_mask": null,
            "no_mm": null,
            "non_linearity": null,
            "num_ICs": null,
            "out_all": null,
            "out_dir": null,
            "out_mean": null,
            "out_orig": null,
            "out_pca": null,
            "out_stats": null,
            "out_unmix": null,
            "out_white": null,
            "output_type": null,
            "pbsc": null,
            "rem_cmp": null,
            "remove_deriv": null,
            "report": null,
            "report_maps": null,
            "s_con": null,
            "s_des": null,
            "sep_vn": null,
            "sep_whiten": null,
            "smode": null,
            "t_con": null,
            "t_des": null,
            "terminal_output": null,
            "tr_sec": null,
            "update_mask": null,
            "var_norm": null
          },
          "module": "fsl.model",
          "name": "MELODIC",
          "outputs": {
            "out_dir": null,
            "report_dir": null
          },
          "type": null
        },
        "fsl.model.MultipleRegressDesign": {
          "inputs": {
            "contrasts": null,
            "groups": null,
            "ignore_exception": false,
            "regressors": null
          },
          "module": "fsl.model",
          "name": "MultipleRegressDesign",
          "outputs": {
            "design_con": null,
            "design_fts": null,
            "design_grp": null,
            "design_mat": null
          },
          "type": null
        },
        "fsl.model.Randomise": {
          "inputs": {
            "args": null,
            "base_name": "tbss_",
            "c_thresh": null,
            "cm_thresh": null,
            "demean": null,
            "design_mat": null,
            "environ": {},
            "f_c_thresh": null,
            "f_cm_thresh": null,
            "f_only": null,
            "fcon": null,
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "num_perm": null,
            "one_sample_group_mean": null,
            "output_type": null,
            "p_vec_n_dist_files": null,
            "raw_stats_imgs": null,
            "seed": null,
            "show_info_parallel_mode": null,
            "show_total_perms": null,
            "tcon": null,
            "terminal_output": null,
            "tfce": null,
            "tfce2D": null,
            "tfce_C": null,
            "tfce_E": null,
            "tfce_H": null,
            "var_smooth": null,
            "vox_p_values": null,
            "x_block_labels": null
          },
          "module": "fsl.model",
          "name": "Randomise",
          "outputs": {
            "f_corrected_p_files": null,
            "f_p_files": null,
            "fstat_files": null,
            "t_corrected_p_files": null,
            "t_p_files": null,
            "tstat_files": null
          },
          "type": null
        },
        "fsl.model.SMM": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "mask": null,
            "no_deactivation_class": null,
            "output_type": null,
            "spatial_data_file": null,
            "terminal_output": null
          },
          "module": "fsl.model",
          "name": "SMM",
          "outputs": {
            "activation_p_map": null,
            "deactivation_p_map": null,
            "null_p_map": null
          },
          "type": null
        },
        "fsl.model.SmoothEstimate": {
          "inputs": {
            "args": null,
            "dof": null,
            "environ": {},
            "ignore_exception": false,
            "mask_file": null,
            "output_type": null,
            "residual_fit_file": null,
            "terminal_output": null,
            "zstat_file": null
          },
          "module": "fsl.model",
          "name": "SmoothEstimate",
          "outputs": {
            "dlh": null,
            "resels": null,
            "volume": null
          },
          "type": null
        },
        "fsl.preprocess.ApplyWarp": {
          "inputs": {
            "abswarp": null,
            "args": null,
            "datatype": null,
            "environ": {},
            "field_file": null,
            "ignore_exception": false,
            "in_file": null,
            "interp": null,
            "mask_file": null,
            "out_file": null,
            "output_type": null,
            "postmat": null,
            "premat": null,
            "ref_file": null,
            "relwarp": null,
            "superlevel": null,
            "supersample": null,
            "terminal_output": null
          },
          "module": "fsl.preprocess",
          "name": "ApplyWarp",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.preprocess.ApplyXfm": {
          "inputs": {
            "angle_rep": null,
            "apply_isoxfm": null,
            "apply_xfm": true,
            "args": null,
            "bbrslope": null,
            "bbrtype": null,
            "bgvalue": null,
            "bins": null,
            "coarse_search": null,
            "cost": null,
            "cost_func": null,
            "datatype": null,
            "display_init": null,
            "dof": null,
            "echospacing": null,
            "environ": {},
            "fieldmap": null,
            "fieldmapmask": null,
            "fine_search": null,
            "force_scaling": null,
            "ignore_exception": false,
            "in_file": null,
            "in_matrix_file": null,
            "in_weight": null,
            "interp": null,
            "min_sampling": null,
            "no_clamp": null,
            "no_resample": null,
            "no_resample_blur": null,
            "no_search": null,
            "out_file": null,
            "out_log": null,
            "out_matrix_file": null,
            "output_type": null,
            "padding_size": null,
            "pedir": null,
            "ref_weight": null,
            "reference": null,
            "rigid2D": null,
            "save_log": null,
            "schedule": null,
            "searchr_x": null,
            "searchr_y": null,
            "searchr_z": null,
            "sinc_width": null,
            "sinc_window": null,
            "terminal_output": null,
            "uses_qform": null,
            "verbose": null,
            "wm_seg": null,
            "wmcoords": null,
            "wmnorms": null
          },
          "module": "fsl.preprocess",
          "name": "ApplyXfm",
          "outputs": {
            "out_file": null,
            "out_log": null,
            "out_matrix_file": null
          },
          "type": null
        },
        "fsl.preprocess.BET": {
          "inputs": {
            "args": null,
            "center": null,
            "environ": {},
            "frac": null,
            "functional": null,
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "mesh": null,
            "no_output": null,
            "out_file": null,
            "outline": null,
            "output_type": null,
            "padding": null,
            "radius": null,
            "reduce_bias": null,
            "remove_eyes": null,
            "robust": null,
            "skull": null,
            "surfaces": null,
            "t2_guided": null,
            "terminal_output": null,
            "threshold": null,
            "vertical_gradient": null
          },
          "module": "fsl.preprocess",
          "name": "BET",
          "outputs": {
            "inskull_mask_file": null,
            "inskull_mesh_file": null,
            "mask_file": null,
            "meshfile": null,
            "out_file": null,
            "outline_file": null,
            "outskin_mask_file": null,
            "outskin_mesh_file": null,
            "outskull_mask_file": null,
            "outskull_mesh_file": null,
            "skull_mask_file": null
          },
          "type": null
        },
        "fsl.preprocess.FAST": {
          "inputs": {
            "args": null,
            "bias_iters": null,
            "bias_lowpass": null,
            "environ": {},
            "hyper": null,
            "ignore_exception": false,
            "img_type": null,
            "in_files": null,
            "init_seg_smooth": null,
            "init_transform": null,
            "iters_afterbias": null,
            "manual_seg": null,
            "mixel_smooth": null,
            "no_bias": null,
            "no_pve": null,
            "number_classes": null,
            "other_priors": null,
            "out_basename": null,
            "output_biascorrected": null,
            "output_biasfield": null,
            "output_type": null,
            "probability_maps": null,
            "segment_iters": null,
            "segments": null,
            "terminal_output": null,
            "use_priors": null,
            "verbose": null
          },
          "module": "fsl.preprocess",
          "name": "FAST",
          "outputs": {
            "bias_field": null,
            "mixeltype": null,
            "partial_volume_files": null,
            "partial_volume_map": null,
            "probability_maps": null,
            "restored_image": null,
            "tissue_class_files": null,
            "tissue_class_map": null
          },
          "type": null
        },
        "fsl.preprocess.FIRST": {
          "inputs": {
            "affine_file": null,
            "args": null,
            "brain_extracted": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "list_of_specific_structures": null,
            "method": "auto",
            "method_as_numerical_threshold": null,
            "no_cleanup": null,
            "out_file": "segmented",
            "output_type": null,
            "terminal_output": null,
            "verbose": null
          },
          "module": "fsl.preprocess",
          "name": "FIRST",
          "outputs": {
            "bvars": null,
            "original_segmentations": null,
            "segmentation_file": null,
            "vtk_surfaces": null
          },
          "type": null
        },
        "fsl.preprocess.FLIRT": {
          "inputs": {
            "angle_rep": null,
            "apply_isoxfm": null,
            "apply_xfm": null,
            "args": null,
            "bbrslope": null,
            "bbrtype": null,
            "bgvalue": null,
            "bins": null,
            "coarse_search": null,
            "cost": null,
            "cost_func": null,
            "datatype": null,
            "display_init": null,
            "dof": null,
            "echospacing": null,
            "environ": {},
            "fieldmap": null,
            "fieldmapmask": null,
            "fine_search": null,
            "force_scaling": null,
            "ignore_exception": false,
            "in_file": null,
            "in_matrix_file": null,
            "in_weight": null,
            "interp": null,
            "min_sampling": null,
            "no_clamp": null,
            "no_resample": null,
            "no_resample_blur": null,
            "no_search": null,
            "out_file": null,
            "out_log": null,
            "out_matrix_file": null,
            "output_type": null,
            "padding_size": null,
            "pedir": null,
            "ref_weight": null,
            "reference": null,
            "rigid2D": null,
            "save_log": null,
            "schedule": null,
            "searchr_x": null,
            "searchr_y": null,
            "searchr_z": null,
            "sinc_width": null,
            "sinc_window": null,
            "terminal_output": null,
            "uses_qform": null,
            "verbose": null,
            "wm_seg": null,
            "wmcoords": null,
            "wmnorms": null
          },
          "module": "fsl.preprocess",
          "name": "FLIRT",
          "outputs": {
            "out_file": null,
            "out_log": null,
            "out_matrix_file": null
          },
          "type": null
        },
        "fsl.preprocess.FNIRT": {
          "inputs": {
            "affine_file": null,
            "apply_inmask": null,
            "apply_intensity_mapping": null,
            "apply_refmask": null,
            "args": null,
            "bias_regularization_lambda": null,
            "biasfield_resolution": null,
            "config_file": null,
            "derive_from_ref": null,
            "environ": {},
            "field_file": null,
            "fieldcoeff_file": null,
            "hessian_precision": null,
            "ignore_exception": false,
            "in_file": null,
            "in_fwhm": null,
            "in_intensitymap_file": null,
            "inmask_file": null,
            "inmask_val": null,
            "intensity_mapping_model": null,
            "intensity_mapping_order": null,
            "inwarp_file": null,
            "jacobian_file": null,
            "jacobian_range": null,
            "log_file": null,
            "max_nonlin_iter": null,
            "modulatedref_file": null,
            "out_intensitymap_file": null,
            "output_type": null,
            "ref_file": null,
            "ref_fwhm": null,
            "refmask_file": null,
            "refmask_val": null,
            "regularization_lambda": null,
            "regularization_model": null,
            "skip_implicit_in_masking": null,
            "skip_implicit_ref_masking": null,
            "skip_inmask": null,
            "skip_intensity_mapping": null,
            "skip_lambda_ssq": null,
            "skip_refmask": null,
            "spline_order": null,
            "subsampling_scheme": null,
            "terminal_output": null,
            "warp_resolution": null,
            "warped_file": null
          },
          "module": "fsl.preprocess",
          "name": "FNIRT",
          "outputs": {
            "field_file": null,
            "fieldcoeff_file": null,
            "jacobian_file": null,
            "log_file": null,
            "modulatedref_file": null,
            "out_intensitymap_file": null,
            "warped_file": null
          },
          "type": null
        },
        "fsl.preprocess.FUGUE": {
          "inputs": {
            "args": null,
            "asym_se_time": null,
            "despike_2dfilter": null,
            "despike_threshold": null,
            "dwell_time": null,
            "dwell_to_asym_ratio": null,
            "environ": {},
            "fmap_in_file": null,
            "fmap_out_file": null,
            "forward_warping": false,
            "fourier_order": null,
            "icorr": null,
            "icorr_only": null,
            "ignore_exception": false,
            "in_file": null,
            "mask_file": null,
            "median_2dfilter": null,
            "no_extend": null,
            "no_gap_fill": null,
            "nokspace": null,
            "output_type": null,
            "pava": null,
            "phase_conjugate": null,
            "phasemap_in_file": null,
            "poly_order": null,
            "save_fmap": null,
            "save_shift": null,
            "save_unmasked_fmap": null,
            "save_unmasked_shift": null,
            "shift_in_file": null,
            "shift_out_file": null,
            "smooth2d": null,
            "smooth3d": null,
            "terminal_output": null,
            "unwarp_direction": null,
            "unwarped_file": null,
            "warped_file": null
          },
          "module": "fsl.preprocess",
          "name": "FUGUE",
          "outputs": {
            "fmap_out_file": null,
            "shift_out_file": null,
            "unwarped_file": null,
            "warped_file": null
          },
          "type": null
        },
        "fsl.preprocess.MCFLIRT": {
          "inputs": {
            "args": null,
            "bins": null,
            "cost": null,
            "dof": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "init": null,
            "interpolation": null,
            "mean_vol": null,
            "out_file": null,
            "output_type": null,
            "ref_file": null,
            "ref_vol": null,
            "rotation": null,
            "save_mats": null,
            "save_plots": null,
            "save_rms": null,
            "scaling": null,
            "smooth": null,
            "stages": null,
            "stats_imgs": null,
            "terminal_output": null,
            "use_contour": null,
            "use_gradient": null
          },
          "module": "fsl.preprocess",
          "name": "MCFLIRT",
          "outputs": {
            "mat_file": null,
            "mean_img": null,
            "out_file": null,
            "par_file": null,
            "rms_files": null,
            "std_img": null,
            "variance_img": null
          },
          "type": null
        },
        "fsl.preprocess.PRELUDE": {
          "inputs": {
            "args": null,
            "complex_phase_file": null,
            "end": null,
            "environ": {},
            "ignore_exception": false,
            "label_file": null,
            "labelprocess2d": null,
            "magnitude_file": null,
            "mask_file": null,
            "num_partitions": null,
            "output_type": null,
            "phase_file": null,
            "process2d": null,
            "process3d": null,
            "rawphase_file": null,
            "removeramps": null,
            "savemask_file": null,
            "start": null,
            "terminal_output": null,
            "threshold": null,
            "unwrapped_phase_file": null
          },
          "module": "fsl.preprocess",
          "name": "PRELUDE",
          "outputs": {
            "unwrapped_phase_file": null
          },
          "type": null
        },
        "fsl.preprocess.SUSAN": {
          "inputs": {
            "args": null,
            "brightness_threshold": null,
            "dimension": 3,
            "environ": {},
            "fwhm": null,
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "output_type": null,
            "terminal_output": null,
            "usans": [],
            "use_median": 1
          },
          "module": "fsl.preprocess",
          "name": "SUSAN",
          "outputs": {
            "smoothed_file": null
          },
          "type": null
        },
        "fsl.preprocess.SliceTimer": {
          "inputs": {
            "args": null,
            "custom_order": null,
            "custom_timings": null,
            "environ": {},
            "global_shift": null,
            "ignore_exception": false,
            "in_file": null,
            "index_dir": null,
            "interleaved": null,
            "out_file": null,
            "output_type": null,
            "slice_direction": null,
            "terminal_output": null,
            "time_repetition": null
          },
          "module": "fsl.preprocess",
          "name": "SliceTimer",
          "outputs": {
            "slice_time_corrected_file": null
          },
          "type": null
        },
        "fsl.utils.AvScale": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "mat_file": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "AvScale",
          "outputs": {
            "average_scaling": null,
            "backward_half_transform": null,
            "determinant": null,
            "forward_half_transform": null,
            "left_right_orientation_preserved": null,
            "rotation_translation_matrix": null,
            "scales": null,
            "skews": null
          },
          "type": null
        },
        "fsl.utils.Complex": {
          "inputs": {
            "args": null,
            "complex_cartesian": null,
            "complex_in_file": null,
            "complex_in_file2": null,
            "complex_merge": null,
            "complex_out_file": null,
            "complex_polar": null,
            "complex_split": null,
            "end_vol": null,
            "environ": {},
            "ignore_exception": false,
            "imaginary_in_file": null,
            "imaginary_out_file": null,
            "magnitude_in_file": null,
            "magnitude_out_file": null,
            "output_type": null,
            "phase_in_file": null,
            "phase_out_file": null,
            "real_cartesian": null,
            "real_in_file": null,
            "real_out_file": null,
            "real_polar": null,
            "start_vol": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "Complex",
          "outputs": {
            "complex_out_file": null,
            "imaginary_out_file": null,
            "magnitude_out_file": null,
            "phase_out_file": null,
            "real_out_file": null
          },
          "type": null
        },
        "fsl.utils.ConvertWarp": {
          "inputs": {
            "abswarp": null,
            "args": null,
            "cons_jacobian": null,
            "environ": {},
            "ignore_exception": false,
            "jacobian_max": null,
            "jacobian_min": null,
            "midmat": null,
            "out_abswarp": null,
            "out_file": null,
            "out_relwarp": null,
            "output_type": null,
            "postmat": null,
            "premat": null,
            "reference": null,
            "relwarp": null,
            "shift_direction": null,
            "shift_in_file": null,
            "terminal_output": null,
            "warp1": null,
            "warp2": null
          },
          "module": "fsl.utils",
          "name": "ConvertWarp",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.ConvertXFM": {
          "inputs": {
            "args": null,
            "concat_xfm": null,
            "environ": {},
            "fix_scale_skew": null,
            "ignore_exception": false,
            "in_file": null,
            "in_file2": null,
            "invert_xfm": null,
            "out_file": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "ConvertXFM",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.CopyGeom": {
          "inputs": {
            "args": null,
            "dest_file": null,
            "environ": {},
            "ignore_dims": null,
            "ignore_exception": false,
            "in_file": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "CopyGeom",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.ExtractROI": {
          "inputs": {
            "args": null,
            "crop_list": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "output_type": null,
            "roi_file": null,
            "t_min": null,
            "t_size": null,
            "terminal_output": null,
            "x_min": null,
            "x_size": null,
            "y_min": null,
            "y_size": null,
            "z_min": null,
            "z_size": null
          },
          "module": "fsl.utils",
          "name": "ExtractROI",
          "outputs": {
            "roi_file": null
          },
          "type": null
        },
        "fsl.utils.FilterRegressor": {
          "inputs": {
            "args": null,
            "design_file": null,
            "environ": {},
            "filter_all": null,
            "filter_columns": null,
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "out_file": null,
            "out_vnscales": null,
            "output_type": null,
            "terminal_output": null,
            "var_norm": null
          },
          "module": "fsl.utils",
          "name": "FilterRegressor",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.ImageMaths": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "in_file2": null,
            "op_string": null,
            "out_data_type": null,
            "out_file": null,
            "output_type": null,
            "suffix": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "ImageMaths",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.ImageMeants": {
          "inputs": {
            "args": null,
            "eig": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "nobin": null,
            "order": 1,
            "out_file": null,
            "output_type": null,
            "show_all": null,
            "spatial_coord": null,
            "terminal_output": null,
            "transpose": null,
            "use_mm": null
          },
          "module": "fsl.utils",
          "name": "ImageMeants",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.ImageStats": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask_file": null,
            "op_string": null,
            "output_type": null,
            "split_4d": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "ImageStats",
          "outputs": {
            "out_stat": null
          },
          "type": null
        },
        "fsl.utils.InvWarp": {
          "inputs": {
            "absolute": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inverse_warp": null,
            "jacobian_max": null,
            "jacobian_min": null,
            "niter": null,
            "noconstraint": null,
            "output_type": null,
            "reference": null,
            "regularise": null,
            "relative": null,
            "terminal_output": null,
            "warp": null
          },
          "module": "fsl.utils",
          "name": "InvWarp",
          "outputs": {
            "inverse_warp": null
          },
          "type": null
        },
        "fsl.utils.Merge": {
          "inputs": {
            "args": null,
            "dimension": null,
            "environ": {},
            "ignore_exception": false,
            "in_files": null,
            "merged_file": null,
            "output_type": null,
            "terminal_output": null,
            "tr": null
          },
          "module": "fsl.utils",
          "name": "Merge",
          "outputs": {
            "merged_file": null
          },
          "type": null
        },
        "fsl.utils.MotionOutliers": {
          "inputs": {
            "args": null,
            "dummy": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask": null,
            "metric": null,
            "no_motion_correction": null,
            "out_file": null,
            "out_metric_plot": null,
            "out_metric_values": null,
            "output_type": null,
            "terminal_output": null,
            "threshold": null
          },
          "module": "fsl.utils",
          "name": "MotionOutliers",
          "outputs": {
            "out_file": null,
            "out_metric_plot": null,
            "out_metric_values": null
          },
          "type": null
        },
        "fsl.utils.Overlay": {
          "inputs": {
            "args": null,
            "auto_thresh_bg": null,
            "background_image": null,
            "bg_thresh": null,
            "environ": {},
            "full_bg_range": null,
            "ignore_exception": false,
            "out_file": null,
            "out_type": "float",
            "output_type": null,
            "show_negative_stats": null,
            "stat_image": null,
            "stat_image2": null,
            "stat_thresh": null,
            "stat_thresh2": null,
            "terminal_output": null,
            "transparency": true,
            "use_checkerboard": null
          },
          "module": "fsl.utils",
          "name": "Overlay",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.PlotMotionParams": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "in_source": null,
            "out_file": null,
            "output_type": null,
            "plot_size": null,
            "plot_type": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "PlotMotionParams",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.PlotTimeSeries": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "labels": null,
            "legend_file": null,
            "out_file": null,
            "output_type": null,
            "plot_finish": null,
            "plot_range": null,
            "plot_size": null,
            "plot_start": null,
            "sci_notation": null,
            "terminal_output": null,
            "title": null,
            "x_precision": null,
            "x_units": 1,
            "y_max": null,
            "y_min": null,
            "y_range": null
          },
          "module": "fsl.utils",
          "name": "PlotTimeSeries",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.PowerSpectrum": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "PowerSpectrum",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.Reorient2Std": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "Reorient2Std",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.RobustFOV": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_roi": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "RobustFOV",
          "outputs": {
            "out_roi": null
          },
          "type": null
        },
        "fsl.utils.SigLoss": {
          "inputs": {
            "args": null,
            "echo_time": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask_file": null,
            "out_file": null,
            "output_type": null,
            "slice_direction": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "SigLoss",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.Slicer": {
          "inputs": {
            "all_axial": null,
            "args": null,
            "colour_map": null,
            "dither_edges": null,
            "environ": {},
            "ignore_exception": false,
            "image_edges": null,
            "image_width": null,
            "in_file": null,
            "intensity_range": null,
            "label_slices": true,
            "middle_slices": null,
            "nearest_neighbour": null,
            "out_file": null,
            "output_type": null,
            "sample_axial": null,
            "scaling": null,
            "show_orientation": true,
            "single_slice": null,
            "slice_number": null,
            "terminal_output": null,
            "threshold_edges": null
          },
          "module": "fsl.utils",
          "name": "Slicer",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.Smooth": {
          "inputs": {
            "args": null,
            "environ": {},
            "fwhm": null,
            "ignore_exception": false,
            "in_file": null,
            "output_type": null,
            "smoothed_file": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "Smooth",
          "outputs": {
            "smoothed_file": null
          },
          "type": null
        },
        "fsl.utils.Split": {
          "inputs": {
            "args": null,
            "dimension": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_base_name": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "Split",
          "outputs": {
            "out_files": null
          },
          "type": null
        },
        "fsl.utils.SwapDimensions": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "new_dims": null,
            "out_file": null,
            "output_type": null,
            "terminal_output": null
          },
          "module": "fsl.utils",
          "name": "SwapDimensions",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.WarpPoints": {
          "inputs": {
            "args": null,
            "coord_mm": null,
            "coord_vox": null,
            "dest_file": null,
            "environ": {},
            "ignore_exception": false,
            "in_coords": null,
            "out_file": null,
            "src_file": null,
            "terminal_output": null,
            "warp_file": null,
            "xfm_file": null
          },
          "module": "fsl.utils",
          "name": "WarpPoints",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.WarpPointsToStd": {
          "inputs": {
            "args": null,
            "coord_mm": null,
            "coord_vox": null,
            "environ": {},
            "ignore_exception": false,
            "img_file": null,
            "in_coords": null,
            "out_file": null,
            "premat_file": null,
            "std_file": null,
            "terminal_output": null,
            "warp_file": null,
            "xfm_file": null
          },
          "module": "fsl.utils",
          "name": "WarpPointsToStd",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "fsl.utils.WarpUtils": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "knot_space": null,
            "out_file": null,
            "out_format": null,
            "out_jacobian": null,
            "output_type": null,
            "reference": null,
            "terminal_output": null,
            "warp_resolution": null,
            "with_affine": null,
            "write_jacobian": false
          },
          "module": "fsl.utils",
          "name": "WarpUtils",
          "outputs": {
            "out_file": null,
            "out_jacobian": null
          },
          "type": null
        },
        "io.DataFinder": {
          "inputs": {
            "ignore_exception": false,
            "ignore_regexes": null,
            "match_regex": "(.+)",
            "max_depth": null,
            "min_depth": null,
            "root_paths": null,
            "unpack_single": false
          },
          "module": "io",
          "name": "DataFinder",
          "outputs": {},
          "type": null
        },
        "io.DataGrabber": {
          "inputs": {
            "base_directory": null,
            "ignore_exception": false,
            "raise_on_empty": true,
            "sort_filelist": null,
            "template": null,
            "template_args": null
          },
          "module": "io",
          "name": "DataGrabber",
          "outputs": {},
          "type": null
        },
        "io.DataSink": {
          "inputs": {
            "_outputs": {},
            "base_directory": null,
            "container": null,
            "ignore_exception": false,
            "parameterization": true,
            "regexp_substitutions": null,
            "remove_dest_dir": false,
            "strip_dir": null,
            "substitutions": null
          },
          "module": "io",
          "name": "DataSink",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "io.FreeSurferSource": {
          "inputs": {
            "hemi": "both",
            "ignore_exception": false,
            "subject_id": null,
            "subjects_dir": null
          },
          "module": "io",
          "name": "FreeSurferSource",
          "outputs": {
            "BA_stats": null,
            "T1": null,
            "annot": null,
            "aparc_a2009s_stats": null,
            "aparc_aseg": null,
            "aparc_stats": null,
            "aseg": null,
            "aseg_stats": null,
            "brain": null,
            "brainmask": null,
            "curv": null,
            "curv_stats": null,
            "entorhinal_exvivo_stats": null,
            "filled": null,
            "inflated": null,
            "label": null,
            "norm": null,
            "nu": null,
            "orig": null,
            "pial": null,
            "rawavg": null,
            "ribbon": null,
            "smoothwm": null,
            "sphere": null,
            "sphere_reg": null,
            "sulc": null,
            "thickness": null,
            "volume": null,
            "white": null,
            "wm": null,
            "wmparc": null,
            "wmparc_stats": null
          },
          "type": null
        },
        "io.IOBase": {
          "inputs": {
            "ignore_exception": false
          },
          "module": "io",
          "name": "IOBase",
          "outputs": {},
          "type": null
        },
        "io.JSONFileGrabber": {
          "inputs": {
            "defaults": null,
            "ignore_exception": false,
            "in_file": null
          },
          "module": "io",
          "name": "JSONFileGrabber",
          "outputs": {},
          "type": null
        },
        "io.JSONFileSink": {
          "inputs": {
            "_outputs": {},
            "ignore_exception": false,
            "in_dict": {},
            "out_file": null
          },
          "module": "io",
          "name": "JSONFileSink",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "io.MySQLSink": {
          "inputs": {
            "config": null,
            "database_name": null,
            "host": "localhost",
            "ignore_exception": false,
            "password": null,
            "table_name": null,
            "username": null
          },
          "module": "io",
          "name": "MySQLSink",
          "outputs": {},
          "type": null
        },
        "io.SQLiteSink": {
          "inputs": {
            "database_file": null,
            "ignore_exception": false,
            "table_name": null
          },
          "module": "io",
          "name": "SQLiteSink",
          "outputs": {},
          "type": null
        },
        "io.SSHDataGrabber": {
          "inputs": {
            "base_directory": null,
            "download_files": true,
            "hostname": null,
            "ignore_exception": false,
            "password": null,
            "raise_on_empty": true,
            "sort_filelist": null,
            "ssh_log_to_file": "",
            "template": null,
            "template_args": null,
            "template_expression": "fnmatch",
            "username": null
          },
          "module": "io",
          "name": "SSHDataGrabber",
          "outputs": {},
          "type": null
        },
        "io.SelectFiles": {
          "inputs": {
            "base_directory": null,
            "force_lists": false,
            "ignore_exception": false,
            "raise_on_empty": true,
            "sort_filelist": true
          },
          "module": "io",
          "name": "SelectFiles",
          "outputs": {},
          "type": null
        },
        "io.XNATSink": {
          "inputs": {
            "_outputs": {},
            "assessor_id": null,
            "cache_dir": null,
            "config": null,
            "experiment_id": null,
            "ignore_exception": false,
            "project_id": null,
            "pwd": null,
            "reconstruction_id": null,
            "server": null,
            "share": false,
            "subject_id": null,
            "user": null
          },
          "module": "io",
          "name": "XNATSink",
          "outputs": {},
          "type": null
        },
        "io.XNATSource": {
          "inputs": {
            "cache_dir": null,
            "config": null,
            "ignore_exception": false,
            "pwd": null,
            "query_template": null,
            "query_template_args": {
              "outfiles": []
            },
            "server": null,
            "user": null
          },
          "module": "io",
          "name": "XNATSource",
          "outputs": {},
          "type": null
        },
        "matlab.MatlabCommand": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "logfile": null,
            "mfile": true,
            "nodesktop": true,
            "nosplash": true,
            "paths": null,
            "postscript": [
              "\n,catch ME,",
              "fprintf(2,'MATLAB code threw an exception:\\n');",
              "fprintf(2,'%s\\n',ME.message);",
              "if length(ME.stack) ~= 0, fprintf(2,'File:%s\\nName:%s\\nLine:%d\\n',ME.stack.file,ME.stack.name,ME.stack.line);, end;",
              "end;"
            ],
            "prescript": [
              "ver,",
              "try,"
            ],
            "script": null,
            "script_file": "pyscript.m",
            "single_comp_thread": null,
            "terminal_output": null,
            "uses_mcr": null
          },
          "module": "matlab",
          "name": "MatlabCommand",
          "outputs": {},
          "type": null
        },
        "mipav.developer.JistBrainMgdmSegmentation": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inAdjust": null,
            "inAtlas": null,
            "inCompute": null,
            "inCurvature": null,
            "inData": null,
            "inFLAIR": null,
            "inMP2RAGE": null,
            "inMP2RAGE2": null,
            "inMPRAGE": null,
            "inMax": null,
            "inMin": null,
            "inOutput": null,
            "inPV": null,
            "inPosterior": null,
            "inSteps": null,
            "inTopology": null,
            "null": null,
            "outLevelset": null,
            "outPosterior2": null,
            "outPosterior3": null,
            "outSegmented": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistBrainMgdmSegmentation",
          "outputs": {
            "outLevelset": null,
            "outPosterior2": null,
            "outPosterior3": null,
            "outSegmented": null
          },
          "type": null
        },
        "mipav.developer.JistBrainMp2rageDuraEstimation": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inDistance": null,
            "inSecond": null,
            "inSkull": null,
            "inoutput": null,
            "null": null,
            "outDura": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistBrainMp2rageDuraEstimation",
          "outputs": {
            "outDura": null
          },
          "type": null
        },
        "mipav.developer.JistBrainMp2rageSkullStripping": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inFilter": null,
            "inSecond": null,
            "inSkip": null,
            "inT1": null,
            "inT1weighted": null,
            "null": null,
            "outBrain": null,
            "outMasked": null,
            "outMasked2": null,
            "outMasked3": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistBrainMp2rageSkullStripping",
          "outputs": {
            "outBrain": null,
            "outMasked": null,
            "outMasked2": null,
            "outMasked3": null
          },
          "type": null
        },
        "mipav.developer.JistBrainPartialVolumeFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inInput": null,
            "inPV": null,
            "inoutput": null,
            "null": null,
            "outPartial": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistBrainPartialVolumeFilter",
          "outputs": {
            "outPartial": null
          },
          "type": null
        },
        "mipav.developer.JistCortexSurfaceMeshInflation": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inLevelset": null,
            "inLorentzian": null,
            "inMax": null,
            "inMean": null,
            "inSOR": null,
            "inStep": null,
            "inTopology": null,
            "null": null,
            "outInflated": null,
            "outOriginal": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistCortexSurfaceMeshInflation",
          "outputs": {
            "outInflated": null,
            "outOriginal": null
          },
          "type": null
        },
        "mipav.developer.JistIntensityMp2rageMasking": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inBackground": null,
            "inMasking": null,
            "inQuantitative": null,
            "inSecond": null,
            "inSkip": null,
            "inT1weighted": null,
            "null": null,
            "outMasked": null,
            "outMasked2": null,
            "outSignal": null,
            "outSignal2": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistIntensityMp2rageMasking",
          "outputs": {
            "outMasked": null,
            "outMasked2": null,
            "outSignal": null,
            "outSignal2": null
          },
          "type": null
        },
        "mipav.developer.JistLaminarProfileCalculator": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inIntensity": null,
            "inMask": null,
            "incomputed": null,
            "null": null,
            "outResult": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistLaminarProfileCalculator",
          "outputs": {
            "outResult": null
          },
          "type": null
        },
        "mipav.developer.JistLaminarProfileGeometry": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inProfile": null,
            "incomputed": null,
            "inoutside": null,
            "inregularization": null,
            "insmoothing": null,
            "null": null,
            "outResult": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistLaminarProfileGeometry",
          "outputs": {
            "outResult": null
          },
          "type": null
        },
        "mipav.developer.JistLaminarProfileSampling": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inCortex": null,
            "inIntensity": null,
            "inProfile": null,
            "null": null,
            "outProfile2": null,
            "outProfilemapped": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistLaminarProfileSampling",
          "outputs": {
            "outProfile2": null,
            "outProfilemapped": null
          },
          "type": null
        },
        "mipav.developer.JistLaminarROIAveraging": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inIntensity": null,
            "inMask": null,
            "inROI": null,
            "inROI2": null,
            "null": null,
            "outROI3": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistLaminarROIAveraging",
          "outputs": {
            "outROI3": null
          },
          "type": null
        },
        "mipav.developer.JistLaminarVolumetricLayering": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inInner": null,
            "inLayering": null,
            "inLayering2": null,
            "inMax": null,
            "inMin": null,
            "inNumber": null,
            "inOuter": null,
            "inTopology": null,
            "incurvature": null,
            "inpresmooth": null,
            "inratio": null,
            "null": null,
            "outContinuous": null,
            "outDiscrete": null,
            "outLayer": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "JistLaminarVolumetricLayering",
          "outputs": {
            "outContinuous": null,
            "outDiscrete": null,
            "outLayer": null
          },
          "type": null
        },
        "mipav.developer.MedicAlgorithmImageCalculator": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inOperation": null,
            "inVolume": null,
            "inVolume2": null,
            "null": null,
            "outResult": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "MedicAlgorithmImageCalculator",
          "outputs": {
            "outResult": null
          },
          "type": null
        },
        "mipav.developer.MedicAlgorithmLesionToads": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inAtlas": null,
            "inAtlas2": null,
            "inAtlas3": null,
            "inAtlas4": null,
            "inAtlas5": null,
            "inAtlas6": null,
            "inConnectivity": null,
            "inCorrect": null,
            "inFLAIR": null,
            "inInclude": null,
            "inMaximum": null,
            "inMaximum2": null,
            "inMaximum3": null,
            "inMaximum4": null,
            "inMaximum5": null,
            "inOutput": null,
            "inOutput2": null,
            "inOutput3": null,
            "inSmooting": null,
            "inT1_MPRAGE": null,
            "inT1_SPGR": null,
            "null": null,
            "outCortical": null,
            "outFilled": null,
            "outHard": null,
            "outHard2": null,
            "outInhomogeneity": null,
            "outLesion": null,
            "outMembership": null,
            "outSulcal": null,
            "outWM": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "MedicAlgorithmLesionToads",
          "outputs": {
            "outCortical": null,
            "outFilled": null,
            "outHard": null,
            "outHard2": null,
            "outInhomogeneity": null,
            "outLesion": null,
            "outMembership": null,
            "outSulcal": null,
            "outWM": null
          },
          "type": null
        },
        "mipav.developer.MedicAlgorithmMipavReorient": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inInterpolation": null,
            "inNew": null,
            "inResolution": null,
            "inSource": null,
            "inTemplate": null,
            "inUser": null,
            "inUser2": null,
            "inUser3": null,
            "inUser4": null,
            "null": null,
            "outReoriented": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "MedicAlgorithmMipavReorient",
          "outputs": {},
          "type": null
        },
        "mipav.developer.MedicAlgorithmN3": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inAutomatic": null,
            "inEnd": null,
            "inField": null,
            "inInput": null,
            "inKernel": null,
            "inMaximum": null,
            "inSignal": null,
            "inSubsample": null,
            "inWeiner": null,
            "null": null,
            "outInhomogeneity": null,
            "outInhomogeneity2": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "MedicAlgorithmN3",
          "outputs": {
            "outInhomogeneity": null,
            "outInhomogeneity2": null
          },
          "type": null
        },
        "mipav.developer.MedicAlgorithmSPECTRE2010": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inApply": null,
            "inAtlas": null,
            "inBackground": null,
            "inCoarse": null,
            "inCost": null,
            "inDegrees": null,
            "inFind": null,
            "inFine": null,
            "inImage": null,
            "inInhomogeneity": null,
            "inInitial": null,
            "inInitial2": null,
            "inInput": null,
            "inMMC": null,
            "inMMC2": null,
            "inMaximum": null,
            "inMinimum": null,
            "inMinimum2": null,
            "inMultiple": null,
            "inMultithreading": null,
            "inNumber": null,
            "inNumber2": null,
            "inOutput": null,
            "inOutput2": null,
            "inOutput3": null,
            "inOutput4": null,
            "inOutput5": null,
            "inRegistration": null,
            "inResample": null,
            "inRun": null,
            "inSkip": null,
            "inSmoothing": null,
            "inSubsample": null,
            "inUse": null,
            "null": null,
            "outFANTASM": null,
            "outMask": null,
            "outMidsagittal": null,
            "outOriginal": null,
            "outPrior": null,
            "outSegmentation": null,
            "outSplitHalves": null,
            "outStripped": null,
            "outd0": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "MedicAlgorithmSPECTRE2010",
          "outputs": {
            "outFANTASM": null,
            "outMask": null,
            "outMidsagittal": null,
            "outOriginal": null,
            "outPrior": null,
            "outSegmentation": null,
            "outSplitHalves": null,
            "outStripped": null,
            "outd0": null
          },
          "type": null
        },
        "mipav.developer.MedicAlgorithmThresholdToBinaryMask": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inLabel": null,
            "inMaximum": null,
            "inMinimum": null,
            "inUse": null,
            "null": null,
            "outBinary": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "MedicAlgorithmThresholdToBinaryMask",
          "outputs": {},
          "type": null
        },
        "mipav.developer.RandomVol": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inField": null,
            "inLambda": null,
            "inMaximum": null,
            "inMinimum": null,
            "inSize": null,
            "inSize2": null,
            "inSize3": null,
            "inSize4": null,
            "inStandard": null,
            "null": null,
            "outRand1": null,
            "terminal_output": null,
            "xDefaultMem": null,
            "xMaxProcess": 1,
            "xPrefExt": null
          },
          "module": "mipav.developer",
          "name": "RandomVol",
          "outputs": {
            "outRand1": null
          },
          "type": null
        },
        "mne.base.WatershedBEM": {
          "inputs": {
            "args": null,
            "atlas_mode": null,
            "environ": {},
            "ignore_exception": false,
            "overwrite": true,
            "subject_id": null,
            "subjects_dir": "",
            "terminal_output": null,
            "volume": "T1"
          },
          "module": "mne.base",
          "name": "WatershedBEM",
          "outputs": {
            "brain_surface": null,
            "cor_files": null,
            "fif_file": null,
            "inner_skull_surface": null,
            "mesh_files": null,
            "outer_skin_surface": null,
            "outer_skull_surface": null
          },
          "type": null
        },
        "mrtrix.convert.MRTrix2TrackVis": {
          "inputs": {
            "image_file": null,
            "in_file": null,
            "matrix_file": null,
            "out_filename": "converted.trk",
            "registration_image_file": null
          },
          "module": "mrtrix.convert",
          "name": "MRTrix2TrackVis",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "mrtrix.preprocess.DWI2Tensor": {
          "inputs": {
            "args": null,
            "debug": null,
            "encoding_file": null,
            "environ": {},
            "ignore_exception": false,
            "ignore_slice_by_volume": null,
            "ignore_volumes": null,
            "in_file": null,
            "out_filename": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "DWI2Tensor",
          "outputs": {
            "tensor": null
          },
          "type": null
        },
        "mrtrix.preprocess.Erode": {
          "inputs": {
            "args": null,
            "debug": null,
            "dilate": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "number_of_passes": null,
            "out_filename": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "Erode",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "mrtrix.preprocess.GenerateWhiteMatterMask": {
          "inputs": {
            "args": null,
            "binary_mask": null,
            "encoding_file": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "noise_level_margin": null,
            "out_WMProb_filename": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "GenerateWhiteMatterMask",
          "outputs": {
            "WMprobabilitymap": null
          },
          "type": null
        },
        "mrtrix.preprocess.MRConvert": {
          "inputs": {
            "args": null,
            "environ": {},
            "extension": "mif",
            "extract_at_axis": null,
            "extract_at_coordinate": null,
            "ignore_exception": false,
            "in_file": null,
            "layout": null,
            "offset_bias": null,
            "out_filename": null,
            "output_datatype": null,
            "prs": null,
            "replace_NaN_with_zero": null,
            "resample": null,
            "terminal_output": null,
            "voxel_dims": null
          },
          "module": "mrtrix.preprocess",
          "name": "MRConvert",
          "outputs": {
            "converted": null
          },
          "type": null
        },
        "mrtrix.preprocess.MRMultiply": {
          "inputs": {
            "args": null,
            "debug": null,
            "environ": {},
            "ignore_exception": false,
            "in_files": null,
            "out_filename": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "MRMultiply",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "mrtrix.preprocess.MRTransform": {
          "inputs": {
            "args": null,
            "debug": null,
            "environ": {},
            "flip_x": null,
            "ignore_exception": false,
            "in_files": null,
            "invert": null,
            "out_filename": null,
            "quiet": null,
            "reference_image": null,
            "replace_transform": null,
            "template_image": null,
            "terminal_output": null,
            "transformation_file": null
          },
          "module": "mrtrix.preprocess",
          "name": "MRTransform",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "mrtrix.preprocess.MRTrixInfo": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "MRTrixInfo",
          "outputs": {},
          "type": null
        },
        "mrtrix.preprocess.MRTrixViewer": {
          "inputs": {
            "args": null,
            "debug": null,
            "environ": {},
            "ignore_exception": false,
            "in_files": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "MRTrixViewer",
          "outputs": {},
          "type": null
        },
        "mrtrix.preprocess.MedianFilter3D": {
          "inputs": {
            "args": null,
            "debug": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_filename": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "MedianFilter3D",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "mrtrix.preprocess.Tensor2ApparentDiffusion": {
          "inputs": {
            "args": null,
            "debug": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_filename": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "Tensor2ApparentDiffusion",
          "outputs": {
            "ADC": null
          },
          "type": null
        },
        "mrtrix.preprocess.Tensor2FractionalAnisotropy": {
          "inputs": {
            "args": null,
            "debug": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_filename": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "Tensor2FractionalAnisotropy",
          "outputs": {
            "FA": null
          },
          "type": null
        },
        "mrtrix.preprocess.Tensor2Vector": {
          "inputs": {
            "args": null,
            "debug": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_filename": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "Tensor2Vector",
          "outputs": {
            "vector": null
          },
          "type": null
        },
        "mrtrix.preprocess.Threshold": {
          "inputs": {
            "absolute_threshold_value": null,
            "args": null,
            "debug": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "invert": null,
            "out_filename": null,
            "percentage_threshold_value": null,
            "quiet": null,
            "replace_zeros_with_NaN": null,
            "terminal_output": null
          },
          "module": "mrtrix.preprocess",
          "name": "Threshold",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "mrtrix.tensors.ConstrainedSphericalDeconvolution": {
          "inputs": {
            "args": null,
            "debug": null,
            "directions_file": null,
            "encoding_file": null,
            "environ": {},
            "filter_file": null,
            "ignore_exception": false,
            "in_file": null,
            "iterations": null,
            "lambda_value": null,
            "mask_image": null,
            "maximum_harmonic_order": null,
            "normalise": null,
            "out_filename": null,
            "response_file": null,
            "terminal_output": null,
            "threshold_value": null
          },
          "module": "mrtrix.tensors",
          "name": "ConstrainedSphericalDeconvolution",
          "outputs": {
            "spherical_harmonics_image": null
          },
          "type": null
        },
        "mrtrix.tensors.DWI2SphericalHarmonicsImage": {
          "inputs": {
            "args": null,
            "encoding_file": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "maximum_harmonic_order": null,
            "normalise": null,
            "out_filename": null,
            "terminal_output": null
          },
          "module": "mrtrix.tensors",
          "name": "DWI2SphericalHarmonicsImage",
          "outputs": {
            "spherical_harmonics_image": null
          },
          "type": null
        },
        "mrtrix.tensors.Directions2Amplitude": {
          "inputs": {
            "args": null,
            "display_debug": null,
            "display_info": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "num_peaks": null,
            "out_file": null,
            "peak_directions": null,
            "peaks_image": null,
            "quiet_display": null,
            "terminal_output": null
          },
          "module": "mrtrix.tensors",
          "name": "Directions2Amplitude",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "mrtrix.tensors.EstimateResponseForSH": {
          "inputs": {
            "args": null,
            "debug": null,
            "encoding_file": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "mask_image": null,
            "maximum_harmonic_order": null,
            "normalise": null,
            "out_filename": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "mrtrix.tensors",
          "name": "EstimateResponseForSH",
          "outputs": {
            "response": null
          },
          "type": null
        },
        "mrtrix.tensors.FSL2MRTrix": {
          "inputs": {
            "bval_file": null,
            "bvec_file": null,
            "invert_x": false,
            "invert_y": false,
            "invert_z": false,
            "out_encoding_file": null
          },
          "module": "mrtrix.tensors",
          "name": "FSL2MRTrix",
          "outputs": {
            "encoding_file": null
          },
          "type": null
        },
        "mrtrix.tensors.FindShPeaks": {
          "inputs": {
            "args": null,
            "directions_file": null,
            "display_debug": null,
            "display_info": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "num_peaks": null,
            "out_file": null,
            "peak_directions": null,
            "peak_threshold": null,
            "peaks_image": null,
            "quiet_display": null,
            "terminal_output": null
          },
          "module": "mrtrix.tensors",
          "name": "FindShPeaks",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "mrtrix.tensors.GenerateDirections": {
          "inputs": {
            "args": null,
            "display_debug": null,
            "display_info": null,
            "environ": {},
            "ignore_exception": false,
            "niter": null,
            "num_dirs": null,
            "out_file": null,
            "power": null,
            "quiet_display": null,
            "terminal_output": null
          },
          "module": "mrtrix.tensors",
          "name": "GenerateDirections",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "mrtrix.tracking.DiffusionTensorStreamlineTrack": {
          "inputs": {
            "args": null,
            "cutoff_value": null,
            "desired_number_of_tracks": null,
            "do_not_precompute": null,
            "environ": {},
            "exclude_file": null,
            "exclude_spec": null,
            "gradient_encoding_file": null,
            "ignore_exception": false,
            "in_file": null,
            "include_file": null,
            "include_spec": null,
            "initial_cutoff_value": null,
            "initial_direction": null,
            "inputmodel": "DT_STREAM",
            "mask_file": null,
            "mask_spec": null,
            "maximum_number_of_tracks": null,
            "maximum_tract_length": null,
            "minimum_radius_of_curvature": null,
            "minimum_tract_length": null,
            "no_mask_interpolation": null,
            "out_file": null,
            "seed_file": null,
            "seed_spec": null,
            "step_size": null,
            "stop": null,
            "terminal_output": null,
            "unidirectional": null
          },
          "module": "mrtrix.tracking",
          "name": "DiffusionTensorStreamlineTrack",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "mrtrix.tracking.FilterTracks": {
          "inputs": {
            "args": null,
            "debug": null,
            "environ": {},
            "exclude_file": null,
            "exclude_spec": null,
            "ignore_exception": false,
            "in_file": null,
            "include_file": null,
            "include_spec": null,
            "invert": null,
            "minimum_tract_length": null,
            "no_mask_interpolation": null,
            "out_file": null,
            "quiet": null,
            "terminal_output": null
          },
          "module": "mrtrix.tracking",
          "name": "FilterTracks",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "mrtrix.tracking.ProbabilisticSphericallyDeconvolutedStreamlineTrack": {
          "inputs": {
            "args": null,
            "cutoff_value": null,
            "desired_number_of_tracks": null,
            "do_not_precompute": null,
            "environ": {},
            "exclude_file": null,
            "exclude_spec": null,
            "ignore_exception": false,
            "in_file": null,
            "include_file": null,
            "include_spec": null,
            "initial_cutoff_value": null,
            "initial_direction": null,
            "inputmodel": "DT_STREAM",
            "mask_file": null,
            "mask_spec": null,
            "maximum_number_of_tracks": null,
            "maximum_number_of_trials": null,
            "maximum_tract_length": null,
            "minimum_radius_of_curvature": null,
            "minimum_tract_length": null,
            "no_mask_interpolation": null,
            "out_file": null,
            "seed_file": null,
            "seed_spec": null,
            "step_size": null,
            "stop": null,
            "terminal_output": null,
            "unidirectional": null
          },
          "module": "mrtrix.tracking",
          "name": "ProbabilisticSphericallyDeconvolutedStreamlineTrack",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "mrtrix.tracking.SphericallyDeconvolutedStreamlineTrack": {
          "inputs": {
            "args": null,
            "cutoff_value": null,
            "desired_number_of_tracks": null,
            "do_not_precompute": null,
            "environ": {},
            "exclude_file": null,
            "exclude_spec": null,
            "ignore_exception": false,
            "in_file": null,
            "include_file": null,
            "include_spec": null,
            "initial_cutoff_value": null,
            "initial_direction": null,
            "inputmodel": "DT_STREAM",
            "mask_file": null,
            "mask_spec": null,
            "maximum_number_of_tracks": null,
            "maximum_tract_length": null,
            "minimum_radius_of_curvature": null,
            "minimum_tract_length": null,
            "no_mask_interpolation": null,
            "out_file": null,
            "seed_file": null,
            "seed_spec": null,
            "step_size": null,
            "stop": null,
            "terminal_output": null,
            "unidirectional": null
          },
          "module": "mrtrix.tracking",
          "name": "SphericallyDeconvolutedStreamlineTrack",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "mrtrix.tracking.StreamlineTrack": {
          "inputs": {
            "args": null,
            "cutoff_value": null,
            "desired_number_of_tracks": null,
            "do_not_precompute": null,
            "environ": {},
            "exclude_file": null,
            "exclude_spec": null,
            "ignore_exception": false,
            "in_file": null,
            "include_file": null,
            "include_spec": null,
            "initial_cutoff_value": null,
            "initial_direction": null,
            "inputmodel": "DT_STREAM",
            "mask_file": null,
            "mask_spec": null,
            "maximum_number_of_tracks": null,
            "maximum_tract_length": null,
            "minimum_radius_of_curvature": null,
            "minimum_tract_length": null,
            "no_mask_interpolation": null,
            "out_file": null,
            "seed_file": null,
            "seed_spec": null,
            "step_size": null,
            "stop": null,
            "terminal_output": null,
            "unidirectional": null
          },
          "module": "mrtrix.tracking",
          "name": "StreamlineTrack",
          "outputs": {
            "tracked": null
          },
          "type": null
        },
        "mrtrix.tracking.Tracks2Prob": {
          "inputs": {
            "args": null,
            "colour": null,
            "environ": {},
            "fraction": null,
            "ignore_exception": false,
            "in_file": null,
            "out_filename": null,
            "output_datatype": null,
            "resample": null,
            "template_file": null,
            "terminal_output": null,
            "voxel_dims": null
          },
          "module": "mrtrix.tracking",
          "name": "Tracks2Prob",
          "outputs": {
            "tract_image": null
          },
          "type": null
        },
        "nipy.model.EstimateContrast": {
          "inputs": {
            "axis": null,
            "beta": null,
            "constants": null,
            "contrasts": null,
            "dof": null,
            "ignore_exception": false,
            "mask": null,
            "nvbeta": null,
            "reg_names": null,
            "s2": null
          },
          "module": "nipy.model",
          "name": "EstimateContrast",
          "outputs": {
            "p_maps": null,
            "stat_maps": null,
            "z_maps": null
          },
          "type": null
        },
        "nipy.model.FitGLM": {
          "inputs": {
            "TR": null,
            "drift_model": "Cosine",
            "hrf_model": "Canonical",
            "ignore_exception": false,
            "mask": null,
            "method": "kalman",
            "model": "ar1",
            "normalize_design_matrix": false,
            "plot_design_matrix": false,
            "save_residuals": false,
            "session_info": null
          },
          "module": "nipy.model",
          "name": "FitGLM",
          "outputs": {
            "a": null,
            "axis": null,
            "beta": null,
            "constants": null,
            "dof": null,
            "nvbeta": null,
            "reg_names": null,
            "residuals": null,
            "s2": null
          },
          "type": null
        },
        "nipy.preprocess.ComputeMask": {
          "inputs": {
            "M": null,
            "cc": null,
            "ignore_exception": false,
            "m": null,
            "mean_volume": null,
            "reference_volume": null
          },
          "module": "nipy.preprocess",
          "name": "ComputeMask",
          "outputs": {
            "brain_mask": null
          },
          "type": null
        },
        "nipy.preprocess.FmriRealign4d": {
          "inputs": {
            "between_loops": [
              5
            ],
            "ignore_exception": false,
            "in_file": null,
            "loops": [
              5
            ],
            "slice_order": null,
            "speedup": [
              5
            ],
            "start": 0.0,
            "time_interp": null,
            "tr": null,
            "tr_slices": null
          },
          "module": "nipy.preprocess",
          "name": "FmriRealign4d",
          "outputs": {
            "out_file": null,
            "par_file": null
          },
          "type": null
        },
        "nipy.preprocess.SpaceTimeRealigner": {
          "inputs": {
            "ignore_exception": false,
            "in_file": null,
            "slice_info": null,
            "slice_times": null,
            "tr": null
          },
          "module": "nipy.preprocess",
          "name": "SpaceTimeRealigner",
          "outputs": {
            "out_file": null,
            "par_file": null
          },
          "type": null
        },
        "nipy.preprocess.Trim": {
          "inputs": {
            "begin_index": 0,
            "end_index": 0,
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "suffix": "_trim"
          },
          "module": "nipy.preprocess",
          "name": "Trim",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "nipy.utils.Similarity": {
          "inputs": {
            "ignore_exception": false,
            "mask1": null,
            "mask2": null,
            "metric": null,
            "volume1": null,
            "volume2": null
          },
          "module": "nipy.utils",
          "name": "Similarity",
          "outputs": {
            "similarity": null
          },
          "type": null
        },
        "nitime.analysis.CoherenceAnalyzer": {
          "inputs": {
            "NFFT": 64,
            "TR": null,
            "figure_type": "matrix",
            "frequency_range": [
              0.02,
              0.15
            ],
            "ignore_exception": false,
            "in_TS": null,
            "in_file": null,
            "n_overlap": 0,
            "output_csv_file": null,
            "output_figure_file": null
          },
          "module": "nitime.analysis",
          "name": "CoherenceAnalyzer",
          "outputs": {
            "coherence_array": null,
            "coherence_csv": null,
            "coherence_fig": null,
            "timedelay_array": null,
            "timedelay_csv": null,
            "timedelay_fig": null
          },
          "type": null
        },
        "semtools.brains.classify.BRAINSPosteriorToContinuousClass": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputBasalGmVolume": null,
            "inputCrblGmVolume": null,
            "inputCrblWmVolume": null,
            "inputCsfVolume": null,
            "inputSurfaceGmVolume": null,
            "inputVbVolume": null,
            "inputWhiteVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.brains.classify",
          "name": "BRAINSPosteriorToContinuousClass",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.brains.segmentation.BRAINSTalairach": {
          "inputs": {
            "AC": null,
            "ACisIndex": null,
            "IRP": null,
            "IRPisIndex": null,
            "PC": null,
            "PCisIndex": null,
            "SLA": null,
            "SLAisIndex": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "outputBox": null,
            "outputGrid": null,
            "terminal_output": null
          },
          "module": "semtools.brains.segmentation",
          "name": "BRAINSTalairach",
          "outputs": {
            "outputBox": null,
            "outputGrid": null
          },
          "type": null
        },
        "semtools.brains.segmentation.BRAINSTalairachMask": {
          "inputs": {
            "args": null,
            "environ": {},
            "expand": null,
            "hemisphereMode": null,
            "ignore_exception": false,
            "inputVolume": null,
            "outputVolume": null,
            "talairachBox": null,
            "talairachParameters": null,
            "terminal_output": null
          },
          "module": "semtools.brains.segmentation",
          "name": "BRAINSTalairachMask",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.brains.segmentation.SimilarityIndex": {
          "inputs": {
            "ANNContinuousVolume": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputManualVolume": null,
            "outputCSVFilename": null,
            "terminal_output": null,
            "thresholdInterval": null
          },
          "module": "semtools.brains.segmentation",
          "name": "SimilarityIndex",
          "outputs": {},
          "type": null
        },
        "semtools.brains.utilities.HistogramMatchingFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "histogramAlgorithm": null,
            "ignore_exception": false,
            "inputBinaryVolume": null,
            "inputVolume": null,
            "numberOfHistogramBins": null,
            "numberOfMatchPoints": null,
            "outputVolume": null,
            "referenceBinaryVolume": null,
            "referenceVolume": null,
            "terminal_output": null,
            "verbose": null,
            "writeHistogram": null
          },
          "module": "semtools.brains.utilities",
          "name": "HistogramMatchingFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.converters.DWICompare": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume1": null,
            "inputVolume2": null,
            "terminal_output": null
          },
          "module": "semtools.converters",
          "name": "DWICompare",
          "outputs": {},
          "type": null
        },
        "semtools.converters.DWISimpleCompare": {
          "inputs": {
            "args": null,
            "checkDWIData": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume1": null,
            "inputVolume2": null,
            "terminal_output": null
          },
          "module": "semtools.converters",
          "name": "DWISimpleCompare",
          "outputs": {},
          "type": null
        },
        "semtools.diffusion.diffusion.DWIConvert": {
          "inputs": {
            "args": null,
            "conversionMode": null,
            "environ": {},
            "fMRI": null,
            "fslNIFTIFile": null,
            "gradientVectorFile": null,
            "ignore_exception": false,
            "inputBValues": null,
            "inputBVectors": null,
            "inputDicomDirectory": null,
            "inputVolume": null,
            "outputBValues": null,
            "outputBVectors": null,
            "outputDirectory": null,
            "outputVolume": null,
            "smallGradientThreshold": null,
            "terminal_output": null,
            "useBMatrixGradientDirections": null,
            "useIdentityMeaseurementFrame": null,
            "writeProtocolGradientsFile": null
          },
          "module": "semtools.diffusion.diffusion",
          "name": "DWIConvert",
          "outputs": {
            "gradientVectorFile": null,
            "outputBValues": null,
            "outputBVectors": null,
            "outputDirectory": null,
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.diffusion.dtiaverage": {
          "inputs": {
            "DTI_double": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputs": null,
            "tensor_output": null,
            "terminal_output": null,
            "verbose": null
          },
          "module": "semtools.diffusion.diffusion",
          "name": "dtiaverage",
          "outputs": {
            "tensor_output": null
          },
          "type": null
        },
        "semtools.diffusion.diffusion.dtiestim": {
          "inputs": {
            "B0": null,
            "B0_mask_output": null,
            "DTI_double": null,
            "args": null,
            "bad_region_mask": null,
            "brain_mask": null,
            "correction": null,
            "defaultTensor": null,
            "dwi_image": null,
            "environ": {},
            "idwi": null,
            "ignore_exception": false,
            "method": null,
            "shiftNeg": null,
            "shiftNegCoeff": null,
            "sigma": null,
            "step": null,
            "tensor_output": null,
            "terminal_output": null,
            "threshold": null,
            "verbose": null,
            "weight_iterations": null
          },
          "module": "semtools.diffusion.diffusion",
          "name": "dtiestim",
          "outputs": {
            "B0": null,
            "B0_mask_output": null,
            "idwi": null,
            "tensor_output": null
          },
          "type": null
        },
        "semtools.diffusion.diffusion.dtiprocess": {
          "inputs": {
            "DTI_double": null,
            "RD_output": null,
            "affineitk_file": null,
            "args": null,
            "color_fa_output": null,
            "correction": null,
            "deformation_output": null,
            "dof_file": null,
            "dti_image": null,
            "environ": {},
            "fa_gradient_output": null,
            "fa_gradmag_output": null,
            "fa_output": null,
            "forward": null,
            "frobenius_norm_output": null,
            "hField": null,
            "ignore_exception": false,
            "interpolation": null,
            "lambda1_output": null,
            "lambda2_output": null,
            "lambda3_output": null,
            "mask": null,
            "md_output": null,
            "negative_eigenvector_output": null,
            "newdof_file": null,
            "outmask": null,
            "principal_eigenvector_output": null,
            "reorientation": null,
            "rot_output": null,
            "scalar_float": null,
            "sigma": null,
            "terminal_output": null,
            "verbose": null
          },
          "module": "semtools.diffusion.diffusion",
          "name": "dtiprocess",
          "outputs": {
            "RD_output": null,
            "color_fa_output": null,
            "deformation_output": null,
            "fa_gradient_output": null,
            "fa_gradmag_output": null,
            "fa_output": null,
            "frobenius_norm_output": null,
            "lambda1_output": null,
            "lambda2_output": null,
            "lambda3_output": null,
            "md_output": null,
            "negative_eigenvector_output": null,
            "outmask": null,
            "principal_eigenvector_output": null,
            "rot_output": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.compareTractInclusion": {
          "inputs": {
            "args": null,
            "closeness": null,
            "environ": {},
            "ignore_exception": false,
            "numberOfPoints": null,
            "numberOfThreads": null,
            "standardFiber": null,
            "terminal_output": null,
            "testFiber": null,
            "testForBijection": null,
            "testForFiberCardinality": null,
            "writeXMLPolyDataFile": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "compareTractInclusion",
          "outputs": {},
          "type": null
        },
        "semtools.diffusion.gtract.extractNrrdVectorIndex": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "setImageOrientation": null,
            "terminal_output": null,
            "vectorIndex": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "extractNrrdVectorIndex",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractAnisotropyMap": {
          "inputs": {
            "anisotropyType": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputTensorVolume": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractAnisotropyMap",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractAverageBvalues": {
          "inputs": {
            "args": null,
            "averageB0only": null,
            "directionsTolerance": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractAverageBvalues",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractClipAnisotropy": {
          "inputs": {
            "args": null,
            "clipFirstSlice": null,
            "clipLastSlice": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractClipAnisotropy",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractCoRegAnatomy": {
          "inputs": {
            "args": null,
            "borderSize": null,
            "convergence": null,
            "environ": {},
            "gradientTolerance": null,
            "gridSize": null,
            "ignore_exception": false,
            "inputAnatomicalVolume": null,
            "inputRigidTransform": null,
            "inputVolume": null,
            "maxBSplineDisplacement": null,
            "maximumStepSize": null,
            "minimumStepSize": null,
            "numberOfHistogramBins": null,
            "numberOfIterations": null,
            "numberOfSamples": null,
            "numberOfThreads": null,
            "outputTransformName": null,
            "relaxationFactor": null,
            "samplingPercentage": null,
            "spatialScale": null,
            "terminal_output": null,
            "transformType": null,
            "translationScale": null,
            "useCenterOfHeadAlign": null,
            "useGeometryAlign": null,
            "useMomentsAlign": null,
            "vectorIndex": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractCoRegAnatomy",
          "outputs": {
            "outputTransformName": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractConcatDwi": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignoreOrigins": null,
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractConcatDwi",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractCopyImageOrientation": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputReferenceVolume": null,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractCopyImageOrientation",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractCoregBvalues": {
          "inputs": {
            "args": null,
            "debugLevel": null,
            "eddyCurrentCorrection": null,
            "environ": {},
            "fixedVolume": null,
            "fixedVolumeIndex": null,
            "ignore_exception": false,
            "maximumStepSize": null,
            "minimumStepSize": null,
            "movingVolume": null,
            "numberOfIterations": null,
            "numberOfSpatialSamples": null,
            "numberOfThreads": null,
            "outputTransform": null,
            "outputVolume": null,
            "registerB0Only": null,
            "relaxationFactor": null,
            "samplingPercentage": null,
            "spatialScale": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractCoregBvalues",
          "outputs": {
            "outputTransform": null,
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractCostFastMarching": {
          "inputs": {
            "anisotropyWeight": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputAnisotropyVolume": null,
            "inputStartingSeedsLabelMapVolume": null,
            "inputTensorVolume": null,
            "numberOfThreads": null,
            "outputCostVolume": null,
            "outputSpeedVolume": null,
            "seedThreshold": null,
            "startingSeedsLabel": null,
            "stoppingValue": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractCostFastMarching",
          "outputs": {
            "outputCostVolume": null,
            "outputSpeedVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractCreateGuideFiber": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputFiber": null,
            "numberOfPoints": null,
            "numberOfThreads": null,
            "outputFiber": null,
            "terminal_output": null,
            "writeXMLPolyDataFile": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractCreateGuideFiber",
          "outputs": {
            "outputFiber": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractFastMarchingTracking": {
          "inputs": {
            "args": null,
            "costStepSize": null,
            "environ": {},
            "ignore_exception": false,
            "inputAnisotropyVolume": null,
            "inputCostVolume": null,
            "inputStartingSeedsLabelMapVolume": null,
            "inputTensorVolume": null,
            "maximumStepSize": null,
            "minimumStepSize": null,
            "numberOfIterations": null,
            "numberOfThreads": null,
            "outputTract": null,
            "seedThreshold": null,
            "startingSeedsLabel": null,
            "terminal_output": null,
            "trackingThreshold": null,
            "writeXMLPolyDataFile": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractFastMarchingTracking",
          "outputs": {
            "outputTract": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractFiberTracking": {
          "inputs": {
            "args": null,
            "branchingAngle": null,
            "branchingThreshold": null,
            "curvatureThreshold": null,
            "endingSeedsLabel": null,
            "environ": {},
            "guidedCurvatureThreshold": null,
            "ignore_exception": false,
            "inputAnisotropyVolume": null,
            "inputEndingSeedsLabelMapVolume": null,
            "inputStartingSeedsLabelMapVolume": null,
            "inputTensorVolume": null,
            "inputTract": null,
            "maximumBranchPoints": null,
            "maximumGuideDistance": null,
            "maximumLength": null,
            "minimumLength": null,
            "numberOfThreads": null,
            "outputTract": null,
            "randomSeed": null,
            "seedThreshold": null,
            "startingSeedsLabel": null,
            "stepSize": null,
            "tendF": null,
            "tendG": null,
            "terminal_output": null,
            "trackingMethod": null,
            "trackingThreshold": null,
            "useLoopDetection": null,
            "useRandomWalk": null,
            "useTend": null,
            "writeXMLPolyDataFile": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractFiberTracking",
          "outputs": {
            "outputTract": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractImageConformity": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputReferenceVolume": null,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractImageConformity",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractInvertBSplineTransform": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputReferenceVolume": null,
            "inputTransform": null,
            "landmarkDensity": null,
            "numberOfThreads": null,
            "outputTransform": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractInvertBSplineTransform",
          "outputs": {
            "outputTransform": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractInvertDisplacementField": {
          "inputs": {
            "args": null,
            "baseImage": null,
            "deformationImage": null,
            "environ": {},
            "ignore_exception": false,
            "numberOfThreads": null,
            "outputVolume": null,
            "subsamplingFactor": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractInvertDisplacementField",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractInvertRigidTransform": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputTransform": null,
            "numberOfThreads": null,
            "outputTransform": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractInvertRigidTransform",
          "outputs": {
            "outputTransform": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractResampleAnisotropy": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputAnatomicalVolume": null,
            "inputAnisotropyVolume": null,
            "inputTransform": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null,
            "transformType": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractResampleAnisotropy",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractResampleB0": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputAnatomicalVolume": null,
            "inputTransform": null,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null,
            "transformType": null,
            "vectorIndex": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractResampleB0",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractResampleCodeImage": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputCodeVolume": null,
            "inputReferenceVolume": null,
            "inputTransform": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null,
            "transformType": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractResampleCodeImage",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractResampleDWIInPlace": {
          "inputs": {
            "args": null,
            "debugLevel": null,
            "environ": {},
            "ignore_exception": false,
            "imageOutputSize": null,
            "inputTransform": null,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputResampledB0": null,
            "outputVolume": null,
            "referenceVolume": null,
            "terminal_output": null,
            "warpDWITransform": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractResampleDWIInPlace",
          "outputs": {
            "outputResampledB0": null,
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractResampleFibers": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputForwardDeformationFieldVolume": null,
            "inputReverseDeformationFieldVolume": null,
            "inputTract": null,
            "numberOfThreads": null,
            "outputTract": null,
            "terminal_output": null,
            "writeXMLPolyDataFile": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractResampleFibers",
          "outputs": {
            "outputTract": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractTensor": {
          "inputs": {
            "applyMeasurementFrame": null,
            "args": null,
            "b0Index": null,
            "backgroundSuppressingThreshold": null,
            "environ": {},
            "ignoreIndex": null,
            "ignore_exception": false,
            "inputVolume": null,
            "maskProcessingMode": null,
            "maskVolume": null,
            "medianFilterSize": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "resampleIsotropic": null,
            "size": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractTensor",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.diffusion.gtract.gtractTransformToDisplacementField": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputReferenceVolume": null,
            "inputTransform": null,
            "numberOfThreads": null,
            "outputDeformationFieldVolume": null,
            "terminal_output": null
          },
          "module": "semtools.diffusion.gtract",
          "name": "gtractTransformToDisplacementField",
          "outputs": {
            "outputDeformationFieldVolume": null
          },
          "type": null
        },
        "semtools.diffusion.maxcurvature.maxcurvature": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "image": null,
            "output": null,
            "sigma": null,
            "terminal_output": null,
            "verbose": null
          },
          "module": "semtools.diffusion.maxcurvature",
          "name": "maxcurvature",
          "outputs": {
            "output": null
          },
          "type": null
        },
        "semtools.diffusion.tractography.commandlineonly.fiberstats": {
          "inputs": {
            "args": null,
            "environ": {},
            "fiber_file": null,
            "ignore_exception": false,
            "terminal_output": null,
            "verbose": null
          },
          "module": "semtools.diffusion.tractography.commandlineonly",
          "name": "fiberstats",
          "outputs": {},
          "type": null
        },
        "semtools.diffusion.tractography.fiberprocess.fiberprocess": {
          "inputs": {
            "args": null,
            "displacement_field": null,
            "environ": {},
            "fiber_file": null,
            "fiber_output": null,
            "fiber_radius": null,
            "h_field": null,
            "ignore_exception": false,
            "index_space": null,
            "noDataChange": null,
            "no_warp": null,
            "saveProperties": null,
            "tensor_volume": null,
            "terminal_output": null,
            "verbose": null,
            "voxel_label": null,
            "voxelize": null,
            "voxelize_count_fibers": null
          },
          "module": "semtools.diffusion.tractography.fiberprocess",
          "name": "fiberprocess",
          "outputs": {
            "fiber_output": null,
            "voxelize": null
          },
          "type": null
        },
        "semtools.diffusion.tractography.fibertrack.fibertrack": {
          "inputs": {
            "args": null,
            "environ": {},
            "forbidden_label": null,
            "force": null,
            "ignore_exception": false,
            "input_roi_file": null,
            "input_tensor_file": null,
            "max_angle": null,
            "min_fa": null,
            "output_fiber_file": null,
            "really_verbose": null,
            "source_label": null,
            "step_size": null,
            "target_label": null,
            "terminal_output": null,
            "verbose": null,
            "whole_brain": null
          },
          "module": "semtools.diffusion.tractography.fibertrack",
          "name": "fibertrack",
          "outputs": {
            "output_fiber_file": null
          },
          "type": null
        },
        "semtools.diffusion.tractography.ukftractography.UKFTractography": {
          "inputs": {
            "Ql": null,
            "Qm": null,
            "Qw": null,
            "Rs": null,
            "args": null,
            "dwiFile": null,
            "environ": {},
            "freeWater": null,
            "fullTensorModel": null,
            "ignore_exception": false,
            "labels": null,
            "maskFile": null,
            "maxBranchingAngle": null,
            "maxHalfFiberLength": null,
            "minBranchingAngle": null,
            "minFA": null,
            "minGA": null,
            "numTensor": null,
            "numThreads": null,
            "recordCovariance": null,
            "recordFA": null,
            "recordFreeWater": null,
            "recordLength": null,
            "recordNMSE": null,
            "recordState": null,
            "recordTensors": null,
            "recordTrace": null,
            "seedFALimit": null,
            "seedsFile": null,
            "seedsPerVoxel": null,
            "stepLength": null,
            "storeGlyphs": null,
            "terminal_output": null,
            "tracts": null,
            "tractsWithSecondTensor": null,
            "writeAsciiTracts": null,
            "writeUncompressedTracts": null
          },
          "module": "semtools.diffusion.tractography.ukftractography",
          "name": "UKFTractography",
          "outputs": {
            "tracts": null,
            "tractsWithSecondTensor": null
          },
          "type": null
        },
        "semtools.featurecreator.GenerateCsfClippedFromClassifiedImage": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputCassifiedVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.featurecreator",
          "name": "GenerateCsfClippedFromClassifiedImage",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.denoising.UnbiasedNonLocalMeans": {
          "inputs": {
            "args": null,
            "environ": {},
            "hp": null,
            "ignore_exception": false,
            "inputVolume": null,
            "outputVolume": null,
            "ps": null,
            "rc": null,
            "rs": null,
            "sigma": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.denoising",
          "name": "UnbiasedNonLocalMeans",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.CannyEdge": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "lowerThreshold": null,
            "outputVolume": null,
            "terminal_output": null,
            "upperThreshold": null,
            "variance": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "CannyEdge",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.CannySegmentationLevelSetImageFilter": {
          "inputs": {
            "advectionWeight": null,
            "args": null,
            "cannyThreshold": null,
            "cannyVariance": null,
            "environ": {},
            "ignore_exception": false,
            "initialModel": null,
            "initialModelIsovalue": null,
            "inputVolume": null,
            "maxIterations": null,
            "outputSpeedVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "CannySegmentationLevelSetImageFilter",
          "outputs": {
            "outputSpeedVolume": null,
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.DilateImage": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputMaskVolume": null,
            "inputRadius": null,
            "inputVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "DilateImage",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.DilateMask": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputBinaryVolume": null,
            "inputVolume": null,
            "lowerThreshold": null,
            "outputVolume": null,
            "sizeStructuralElement": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "DilateMask",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.DistanceMaps": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputLabelVolume": null,
            "inputMaskVolume": null,
            "inputTissueLabel": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "DistanceMaps",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.DumpBinaryTrainingVectors": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputHeaderFilename": null,
            "inputVectorFilename": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "DumpBinaryTrainingVectors",
          "outputs": {},
          "type": null
        },
        "semtools.filtering.featuredetection.ErodeImage": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputMaskVolume": null,
            "inputRadius": null,
            "inputVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "ErodeImage",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.FlippedDifference": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputMaskVolume": null,
            "inputVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "FlippedDifference",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.GenerateBrainClippedImage": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputImg": null,
            "inputMsk": null,
            "numberOfThreads": null,
            "outputFileName": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "GenerateBrainClippedImage",
          "outputs": {
            "outputFileName": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.GenerateSummedGradientImage": {
          "inputs": {
            "MaximumGradient": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume1": null,
            "inputVolume2": null,
            "numberOfThreads": null,
            "outputFileName": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "GenerateSummedGradientImage",
          "outputs": {
            "outputFileName": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.GenerateTestImage": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "lowerBoundOfOutputVolume": null,
            "outputVolume": null,
            "outputVolumeSize": null,
            "terminal_output": null,
            "upperBoundOfOutputVolume": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "GenerateTestImage",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.GradientAnisotropicDiffusionImageFilter": {
          "inputs": {
            "args": null,
            "conductance": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfIterations": null,
            "outputVolume": null,
            "terminal_output": null,
            "timeStep": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "GradientAnisotropicDiffusionImageFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.HammerAttributeCreator": {
          "inputs": {
            "Scale": null,
            "Strength": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputCSFVolume": null,
            "inputGMVolume": null,
            "inputWMVolume": null,
            "outputVolumeBase": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "HammerAttributeCreator",
          "outputs": {},
          "type": null
        },
        "semtools.filtering.featuredetection.NeighborhoodMean": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputMaskVolume": null,
            "inputRadius": null,
            "inputVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "NeighborhoodMean",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.NeighborhoodMedian": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputMaskVolume": null,
            "inputRadius": null,
            "inputVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "NeighborhoodMedian",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.STAPLEAnalysis": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputDimension": null,
            "inputLabelVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "STAPLEAnalysis",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.TextureFromNoiseImageFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputRadius": null,
            "inputVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "TextureFromNoiseImageFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.filtering.featuredetection.TextureMeasureFilter": {
          "inputs": {
            "args": null,
            "distance": null,
            "environ": {},
            "ignore_exception": false,
            "inputMaskVolume": null,
            "inputVolume": null,
            "insideROIValue": null,
            "outputFilename": null,
            "terminal_output": null
          },
          "module": "semtools.filtering.featuredetection",
          "name": "TextureMeasureFilter",
          "outputs": {
            "outputFilename": null
          },
          "type": null
        },
        "semtools.legacy.registration.scalartransform": {
          "inputs": {
            "args": null,
            "deformation": null,
            "environ": {},
            "h_field": null,
            "ignore_exception": false,
            "input_image": null,
            "interpolation": null,
            "invert": null,
            "output_image": null,
            "terminal_output": null,
            "transformation": null
          },
          "module": "semtools.legacy.registration",
          "name": "scalartransform",
          "outputs": {
            "output_image": null,
            "transformation": null
          },
          "type": null
        },
        "semtools.registration.brainsfit.BRAINSFit": {
          "inputs": {
            "ROIAutoClosingSize": null,
            "ROIAutoDilateSize": null,
            "args": null,
            "backgroundFillValue": null,
            "bsplineTransform": null,
            "costFunctionConvergenceFactor": null,
            "costMetric": null,
            "debugLevel": null,
            "environ": {},
            "failureExitCode": null,
            "fixedBinaryVolume": null,
            "fixedVolume": null,
            "fixedVolume2": null,
            "fixedVolumeTimeIndex": null,
            "gui": null,
            "histogramMatch": null,
            "ignore_exception": false,
            "initialTransform": null,
            "initializeRegistrationByCurrentGenericTransform": null,
            "initializeTransformMode": null,
            "interpolationMode": null,
            "linearTransform": null,
            "logFileReport": null,
            "maskInferiorCutOffFromCenter": null,
            "maskProcessingMode": null,
            "maxBSplineDisplacement": null,
            "maximumNumberOfCorrections": null,
            "maximumNumberOfEvaluations": null,
            "maximumStepLength": null,
            "medianFilterSize": null,
            "metricSamplingStrategy": null,
            "minimumStepLength": null,
            "movingBinaryVolume": null,
            "movingVolume": null,
            "movingVolume2": null,
            "movingVolumeTimeIndex": null,
            "numberOfHistogramBins": null,
            "numberOfIterations": null,
            "numberOfMatchPoints": null,
            "numberOfSamples": null,
            "numberOfThreads": null,
            "outputFixedVolumeROI": null,
            "outputMovingVolumeROI": null,
            "outputTransform": null,
            "outputVolume": null,
            "outputVolumePixelType": null,
            "projectedGradientTolerance": null,
            "promptUser": null,
            "relaxationFactor": null,
            "removeIntensityOutliers": null,
            "reproportionScale": null,
            "samplingPercentage": null,
            "scaleOutputValues": null,
            "skewScale": null,
            "splineGridSize": null,
            "strippedOutputTransform": null,
            "terminal_output": null,
            "transformType": null,
            "translationScale": null,
            "useAffine": null,
            "useBSpline": null,
            "useComposite": null,
            "useROIBSpline": null,
            "useRigid": null,
            "useScaleSkewVersor3D": null,
            "useScaleVersor3D": null,
            "useSyN": null,
            "writeOutputTransformInFloat": null,
            "writeTransformOnFailure": null
          },
          "module": "semtools.registration.brainsfit",
          "name": "BRAINSFit",
          "outputs": {
            "bsplineTransform": null,
            "linearTransform": null,
            "logFileReport": null,
            "outputFixedVolumeROI": null,
            "outputMovingVolumeROI": null,
            "outputTransform": null,
            "outputVolume": null,
            "strippedOutputTransform": null
          },
          "type": null
        },
        "semtools.registration.brainsresample.BRAINSResample": {
          "inputs": {
            "args": null,
            "defaultValue": null,
            "deformationVolume": null,
            "environ": {},
            "gridSpacing": null,
            "ignore_exception": false,
            "inputVolume": null,
            "interpolationMode": null,
            "inverseTransform": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "pixelType": null,
            "referenceVolume": null,
            "terminal_output": null,
            "warpTransform": null
          },
          "module": "semtools.registration.brainsresample",
          "name": "BRAINSResample",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.registration.brainsresize.BRAINSResize": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "outputVolume": null,
            "pixelType": null,
            "scaleFactor": null,
            "terminal_output": null
          },
          "module": "semtools.registration.brainsresize",
          "name": "BRAINSResize",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.registration.specialized.BRAINSDemonWarp": {
          "inputs": {
            "args": null,
            "arrayOfPyramidLevelIterations": null,
            "backgroundFillValue": null,
            "checkerboardPatternSubdivisions": null,
            "environ": {},
            "fixedBinaryVolume": null,
            "fixedVolume": null,
            "gradient_type": null,
            "gui": null,
            "histogramMatch": null,
            "ignore_exception": false,
            "initializeWithDisplacementField": null,
            "initializeWithTransform": null,
            "inputPixelType": null,
            "interpolationMode": null,
            "lowerThresholdForBOBF": null,
            "maskProcessingMode": null,
            "max_step_length": null,
            "medianFilterSize": null,
            "minimumFixedPyramid": null,
            "minimumMovingPyramid": null,
            "movingBinaryVolume": null,
            "movingVolume": null,
            "neighborhoodForBOBF": null,
            "numberOfBCHApproximationTerms": null,
            "numberOfHistogramBins": null,
            "numberOfMatchPoints": null,
            "numberOfPyramidLevels": null,
            "numberOfThreads": null,
            "outputCheckerboardVolume": null,
            "outputDebug": null,
            "outputDisplacementFieldPrefix": null,
            "outputDisplacementFieldVolume": null,
            "outputNormalized": null,
            "outputPixelType": null,
            "outputVolume": null,
            "promptUser": null,
            "registrationFilterType": null,
            "seedForBOBF": null,
            "smoothDisplacementFieldSigma": null,
            "terminal_output": null,
            "upFieldSmoothing": null,
            "upperThresholdForBOBF": null,
            "use_vanilla_dem": null
          },
          "module": "semtools.registration.specialized",
          "name": "BRAINSDemonWarp",
          "outputs": {
            "outputCheckerboardVolume": null,
            "outputDisplacementFieldVolume": null,
            "outputVolume": null
          },
          "type": null
        },
        "semtools.registration.specialized.BRAINSTransformFromFiducials": {
          "inputs": {
            "args": null,
            "environ": {},
            "fixedLandmarks": null,
            "fixedLandmarksFile": null,
            "ignore_exception": false,
            "movingLandmarks": null,
            "movingLandmarksFile": null,
            "numberOfThreads": null,
            "saveTransform": null,
            "terminal_output": null,
            "transformType": null
          },
          "module": "semtools.registration.specialized",
          "name": "BRAINSTransformFromFiducials",
          "outputs": {
            "saveTransform": null
          },
          "type": null
        },
        "semtools.registration.specialized.VBRAINSDemonWarp": {
          "inputs": {
            "args": null,
            "arrayOfPyramidLevelIterations": null,
            "backgroundFillValue": null,
            "checkerboardPatternSubdivisions": null,
            "environ": {},
            "fixedBinaryVolume": null,
            "fixedVolume": null,
            "gradient_type": null,
            "gui": null,
            "histogramMatch": null,
            "ignore_exception": false,
            "initializeWithDisplacementField": null,
            "initializeWithTransform": null,
            "inputPixelType": null,
            "interpolationMode": null,
            "lowerThresholdForBOBF": null,
            "makeBOBF": null,
            "max_step_length": null,
            "medianFilterSize": null,
            "minimumFixedPyramid": null,
            "minimumMovingPyramid": null,
            "movingBinaryVolume": null,
            "movingVolume": null,
            "neighborhoodForBOBF": null,
            "numberOfBCHApproximationTerms": null,
            "numberOfHistogramBins": null,
            "numberOfMatchPoints": null,
            "numberOfPyramidLevels": null,
            "numberOfThreads": null,
            "outputCheckerboardVolume": null,
            "outputDebug": null,
            "outputDisplacementFieldPrefix": null,
            "outputDisplacementFieldVolume": null,
            "outputNormalized": null,
            "outputPixelType": null,
            "outputVolume": null,
            "promptUser": null,
            "registrationFilterType": null,
            "seedForBOBF": null,
            "smoothDisplacementFieldSigma": null,
            "terminal_output": null,
            "upFieldSmoothing": null,
            "upperThresholdForBOBF": null,
            "use_vanilla_dem": null,
            "weightFactors": null
          },
          "module": "semtools.registration.specialized",
          "name": "VBRAINSDemonWarp",
          "outputs": {
            "outputCheckerboardVolume": null,
            "outputDisplacementFieldVolume": null,
            "outputVolume": null
          },
          "type": null
        },
        "semtools.segmentation.specialized.BRAINSABC": {
          "inputs": {
            "args": null,
            "atlasDefinition": null,
            "atlasToSubjectInitialTransform": null,
            "atlasToSubjectTransform": null,
            "atlasToSubjectTransformType": null,
            "atlasWarpingOff": null,
            "debuglevel": null,
            "defaultSuffix": null,
            "environ": {},
            "filterIteration": null,
            "filterMethod": null,
            "filterTimeStep": null,
            "gridSize": null,
            "ignore_exception": false,
            "implicitOutputs": null,
            "inputVolumeTypes": null,
            "inputVolumes": null,
            "interpolationMode": null,
            "maxBiasDegree": null,
            "maxIterations": null,
            "medianFilterSize": null,
            "numberOfThreads": null,
            "outputDir": null,
            "outputDirtyLabels": null,
            "outputFormat": null,
            "outputLabels": null,
            "outputVolumes": null,
            "posteriorTemplate": null,
            "restoreState": null,
            "saveState": null,
            "subjectIntermodeTransformType": null,
            "terminal_output": null,
            "useKNN": null,
            "writeLess": null
          },
          "module": "semtools.segmentation.specialized",
          "name": "BRAINSABC",
          "outputs": {
            "atlasToSubjectInitialTransform": null,
            "atlasToSubjectTransform": null,
            "implicitOutputs": null,
            "outputDir": null,
            "outputDirtyLabels": null,
            "outputLabels": null,
            "outputVolumes": null,
            "saveState": null
          },
          "type": null
        },
        "semtools.segmentation.specialized.BRAINSConstellationDetector": {
          "inputs": {
            "BackgroundFillValue": null,
            "LLSModel": null,
            "acLowerBound": null,
            "args": null,
            "atlasLandmarkWeights": null,
            "atlasLandmarks": null,
            "atlasVolume": null,
            "cutOutHeadInOutputVolume": null,
            "debug": null,
            "environ": {},
            "forceACPoint": null,
            "forceHoughEyeDetectorReportFailure": null,
            "forcePCPoint": null,
            "forceRPPoint": null,
            "forceVN4Point": null,
            "houghEyeDetectorMode": null,
            "ignore_exception": false,
            "inputLandmarksEMSP": null,
            "inputTemplateModel": null,
            "inputVolume": null,
            "interpolationMode": null,
            "mspQualityLevel": null,
            "numberOfThreads": null,
            "otsuPercentileThreshold": null,
            "outputLandmarksInACPCAlignedSpace": null,
            "outputLandmarksInInputSpace": null,
            "outputMRML": null,
            "outputResampledVolume": null,
            "outputTransform": null,
            "outputUntransformedClippedVolume": null,
            "outputVerificationScript": null,
            "outputVolume": null,
            "rVN4": null,
            "rac": null,
            "rescaleIntensities": null,
            "rescaleIntensitiesOutputRange": null,
            "resultsDir": null,
            "rmpj": null,
            "rpc": null,
            "terminal_output": null,
            "trimRescaledIntensities": null,
            "verbose": null,
            "writeBranded2DImage": null,
            "writedebuggingImagesLevel": null
          },
          "module": "semtools.segmentation.specialized",
          "name": "BRAINSConstellationDetector",
          "outputs": {
            "outputLandmarksInACPCAlignedSpace": null,
            "outputLandmarksInInputSpace": null,
            "outputMRML": null,
            "outputResampledVolume": null,
            "outputTransform": null,
            "outputUntransformedClippedVolume": null,
            "outputVerificationScript": null,
            "outputVolume": null,
            "resultsDir": null,
            "writeBranded2DImage": null
          },
          "type": null
        },
        "semtools.segmentation.specialized.BRAINSCreateLabelMapFromProbabilityMaps": {
          "inputs": {
            "args": null,
            "cleanLabelVolume": null,
            "dirtyLabelVolume": null,
            "environ": {},
            "foregroundPriors": null,
            "ignore_exception": false,
            "inclusionThreshold": null,
            "inputProbabilityVolume": null,
            "nonAirRegionMask": null,
            "priorLabelCodes": null,
            "terminal_output": null
          },
          "module": "semtools.segmentation.specialized",
          "name": "BRAINSCreateLabelMapFromProbabilityMaps",
          "outputs": {
            "cleanLabelVolume": null,
            "dirtyLabelVolume": null
          },
          "type": null
        },
        "semtools.segmentation.specialized.BRAINSCut": {
          "inputs": {
            "NoTrainingVectorShuffling": null,
            "applyModel": null,
            "args": null,
            "computeSSEOn": null,
            "createVectors": null,
            "environ": {},
            "generateProbability": null,
            "histogramEqualization": null,
            "ignore_exception": false,
            "method": null,
            "modelConfigurationFilename": null,
            "modelFilename": null,
            "multiStructureThreshold": null,
            "netConfiguration": null,
            "numberOfTrees": null,
            "randomTreeDepth": null,
            "terminal_output": null,
            "trainModel": null,
            "trainModelStartIndex": null,
            "validate": null,
            "verbose": null
          },
          "module": "semtools.segmentation.specialized",
          "name": "BRAINSCut",
          "outputs": {},
          "type": null
        },
        "semtools.segmentation.specialized.BRAINSMultiSTAPLE": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputCompositeT1Volume": null,
            "inputLabelVolume": null,
            "inputTransform": null,
            "labelForUndecidedPixels": null,
            "outputConfusionMatrix": null,
            "outputMultiSTAPLE": null,
            "resampledVolumePrefix": null,
            "skipResampling": null,
            "terminal_output": null
          },
          "module": "semtools.segmentation.specialized",
          "name": "BRAINSMultiSTAPLE",
          "outputs": {
            "outputConfusionMatrix": null,
            "outputMultiSTAPLE": null
          },
          "type": null
        },
        "semtools.segmentation.specialized.BRAINSROIAuto": {
          "inputs": {
            "ROIAutoDilateSize": null,
            "args": null,
            "closingSize": null,
            "cropOutput": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "maskOutput": null,
            "numberOfThreads": null,
            "otsuPercentileThreshold": null,
            "outputROIMaskVolume": null,
            "outputVolume": null,
            "outputVolumePixelType": null,
            "terminal_output": null,
            "thresholdCorrectionFactor": null
          },
          "module": "semtools.segmentation.specialized",
          "name": "BRAINSROIAuto",
          "outputs": {
            "outputROIMaskVolume": null,
            "outputVolume": null
          },
          "type": null
        },
        "semtools.segmentation.specialized.BinaryMaskEditorBasedOnLandmarks": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputBinaryVolume": null,
            "inputLandmarkNames": null,
            "inputLandmarkNamesForObliquePlane": null,
            "inputLandmarksFilename": null,
            "outputBinaryVolume": null,
            "setCutDirectionForLandmark": null,
            "setCutDirectionForObliquePlane": null,
            "terminal_output": null
          },
          "module": "semtools.segmentation.specialized",
          "name": "BinaryMaskEditorBasedOnLandmarks",
          "outputs": {
            "outputBinaryVolume": null
          },
          "type": null
        },
        "semtools.segmentation.specialized.ESLR": {
          "inputs": {
            "args": null,
            "closingSize": null,
            "environ": {},
            "high": null,
            "ignore_exception": false,
            "inputVolume": null,
            "low": null,
            "numberOfThreads": null,
            "openingSize": null,
            "outputVolume": null,
            "preserveOutside": null,
            "safetySize": null,
            "terminal_output": null
          },
          "module": "semtools.segmentation.specialized",
          "name": "ESLR",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.testing.featuredetection.SphericalCoordinateGeneration": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputAtlasImage": null,
            "outputPath": null,
            "terminal_output": null
          },
          "module": "semtools.testing.featuredetection",
          "name": "SphericalCoordinateGeneration",
          "outputs": {},
          "type": null
        },
        "semtools.testing.generateaveragelmkfile.GenerateAverageLmkFile": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputLandmarkFiles": null,
            "outputLandmarkFile": null,
            "terminal_output": null
          },
          "module": "semtools.testing.generateaveragelmkfile",
          "name": "GenerateAverageLmkFile",
          "outputs": {
            "outputLandmarkFile": null
          },
          "type": null
        },
        "semtools.testing.landmarkscompare.LandmarksCompare": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputLandmarkFile1": null,
            "inputLandmarkFile2": null,
            "terminal_output": null,
            "tolerance": null
          },
          "module": "semtools.testing.landmarkscompare",
          "name": "LandmarksCompare",
          "outputs": {},
          "type": null
        },
        "semtools.utilities.brains.BRAINSAlignMSP": {
          "inputs": {
            "BackgroundFillValue": null,
            "OutputresampleMSP": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "interpolationMode": null,
            "mspQualityLevel": null,
            "numberOfThreads": null,
            "rescaleIntensities": null,
            "rescaleIntensitiesOutputRange": null,
            "resultsDir": null,
            "terminal_output": null,
            "trimRescaledIntensities": null,
            "verbose": null,
            "writedebuggingImagesLevel": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSAlignMSP",
          "outputs": {
            "OutputresampleMSP": null,
            "resultsDir": null
          },
          "type": null
        },
        "semtools.utilities.brains.BRAINSClipInferior": {
          "inputs": {
            "BackgroundFillValue": null,
            "acLowerBound": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSClipInferior",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.utilities.brains.BRAINSConstellationModeler": {
          "inputs": {
            "BackgroundFillValue": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputTrainingList": null,
            "mspQualityLevel": null,
            "numberOfThreads": null,
            "optimizedLandmarksFilenameExtender": null,
            "outputModel": null,
            "rescaleIntensities": null,
            "rescaleIntensitiesOutputRange": null,
            "resultsDir": null,
            "saveOptimizedLandmarks": null,
            "terminal_output": null,
            "trimRescaledIntensities": null,
            "verbose": null,
            "writedebuggingImagesLevel": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSConstellationModeler",
          "outputs": {
            "outputModel": null,
            "resultsDir": null
          },
          "type": null
        },
        "semtools.utilities.brains.BRAINSEyeDetector": {
          "inputs": {
            "args": null,
            "debugDir": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSEyeDetector",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.utilities.brains.BRAINSInitializedControlPoints": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfThreads": null,
            "outputLandmarksFile": null,
            "outputVolume": null,
            "permuteOrder": null,
            "splineGridSize": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSInitializedControlPoints",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.utilities.brains.BRAINSLandmarkInitializer": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputFixedLandmarkFilename": null,
            "inputMovingLandmarkFilename": null,
            "inputWeightFilename": null,
            "outputTransformFilename": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSLandmarkInitializer",
          "outputs": {
            "outputTransformFilename": null
          },
          "type": null
        },
        "semtools.utilities.brains.BRAINSLinearModelerEPCA": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputTrainingList": null,
            "numberOfThreads": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSLinearModelerEPCA",
          "outputs": {},
          "type": null
        },
        "semtools.utilities.brains.BRAINSLmkTransform": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputFixedLandmarks": null,
            "inputMovingLandmarks": null,
            "inputMovingVolume": null,
            "inputReferenceVolume": null,
            "numberOfThreads": null,
            "outputAffineTransform": null,
            "outputResampledVolume": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSLmkTransform",
          "outputs": {
            "outputAffineTransform": null,
            "outputResampledVolume": null
          },
          "type": null
        },
        "semtools.utilities.brains.BRAINSMush": {
          "inputs": {
            "args": null,
            "boundingBoxSize": null,
            "boundingBoxStart": null,
            "desiredMean": null,
            "desiredVariance": null,
            "environ": {},
            "ignore_exception": false,
            "inputFirstVolume": null,
            "inputMaskVolume": null,
            "inputSecondVolume": null,
            "lowerThresholdFactor": null,
            "lowerThresholdFactorPre": null,
            "numberOfThreads": null,
            "outputMask": null,
            "outputVolume": null,
            "outputWeightsFile": null,
            "seed": null,
            "terminal_output": null,
            "upperThresholdFactor": null,
            "upperThresholdFactorPre": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSMush",
          "outputs": {
            "outputMask": null,
            "outputVolume": null,
            "outputWeightsFile": null
          },
          "type": null
        },
        "semtools.utilities.brains.BRAINSSnapShotWriter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputBinaryVolumes": null,
            "inputPlaneDirection": null,
            "inputSliceToExtractInIndex": null,
            "inputSliceToExtractInPercent": null,
            "inputSliceToExtractInPhysicalPoint": null,
            "inputVolumes": null,
            "outputFilename": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSSnapShotWriter",
          "outputs": {
            "outputFilename": null
          },
          "type": null
        },
        "semtools.utilities.brains.BRAINSTransformConvert": {
          "inputs": {
            "args": null,
            "displacementVolume": null,
            "environ": {},
            "ignore_exception": false,
            "inputTransform": null,
            "outputPrecisionType": null,
            "outputTransform": null,
            "outputTransformType": null,
            "referenceVolume": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSTransformConvert",
          "outputs": {
            "displacementVolume": null,
            "outputTransform": null
          },
          "type": null
        },
        "semtools.utilities.brains.BRAINSTrimForegroundInDirection": {
          "inputs": {
            "BackgroundFillValue": null,
            "args": null,
            "closingSize": null,
            "directionCode": null,
            "environ": {},
            "headSizeLimit": null,
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfThreads": null,
            "otsuPercentileThreshold": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "BRAINSTrimForegroundInDirection",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "semtools.utilities.brains.CleanUpOverlapLabels": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputBinaryVolumes": null,
            "outputBinaryVolumes": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "CleanUpOverlapLabels",
          "outputs": {
            "outputBinaryVolumes": null
          },
          "type": null
        },
        "semtools.utilities.brains.FindCenterOfBrain": {
          "inputs": {
            "args": null,
            "axis": null,
            "backgroundValue": null,
            "clippedImageMask": null,
            "closingSize": null,
            "debugAfterGridComputationsForegroundImage": null,
            "debugClippedImageMask": null,
            "debugDistanceImage": null,
            "debugGridImage": null,
            "debugTrimmedImage": null,
            "environ": {},
            "generateDebugImages": null,
            "headSizeEstimate": null,
            "headSizeLimit": null,
            "ignore_exception": false,
            "imageMask": null,
            "inputVolume": null,
            "maximize": null,
            "otsuPercentileThreshold": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "FindCenterOfBrain",
          "outputs": {
            "clippedImageMask": null,
            "debugAfterGridComputationsForegroundImage": null,
            "debugClippedImageMask": null,
            "debugDistanceImage": null,
            "debugGridImage": null,
            "debugTrimmedImage": null
          },
          "type": null
        },
        "semtools.utilities.brains.GenerateLabelMapFromProbabilityMap": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolumes": null,
            "numberOfThreads": null,
            "outputLabelVolume": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "GenerateLabelMapFromProbabilityMap",
          "outputs": {
            "outputLabelVolume": null
          },
          "type": null
        },
        "semtools.utilities.brains.ImageRegionPlotter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputBinaryROIVolume": null,
            "inputLabelVolume": null,
            "inputVolume1": null,
            "inputVolume2": null,
            "numberOfHistogramBins": null,
            "outputJointHistogramData": null,
            "terminal_output": null,
            "useIntensityForHistogram": null,
            "useROIAUTO": null,
            "verbose": null
          },
          "module": "semtools.utilities.brains",
          "name": "ImageRegionPlotter",
          "outputs": {},
          "type": null
        },
        "semtools.utilities.brains.JointHistogram": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputMaskVolumeInXAxis": null,
            "inputMaskVolumeInYAxis": null,
            "inputVolumeInXAxis": null,
            "inputVolumeInYAxis": null,
            "outputJointHistogramImage": null,
            "terminal_output": null,
            "verbose": null
          },
          "module": "semtools.utilities.brains",
          "name": "JointHistogram",
          "outputs": {},
          "type": null
        },
        "semtools.utilities.brains.ShuffleVectorsModule": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVectorFileBaseName": null,
            "outputVectorFileBaseName": null,
            "resampleProportion": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "ShuffleVectorsModule",
          "outputs": {
            "outputVectorFileBaseName": null
          },
          "type": null
        },
        "semtools.utilities.brains.fcsv_to_hdf5": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "landmarkGlobPattern": null,
            "landmarkTypesList": null,
            "landmarksInformationFile": null,
            "modelFile": null,
            "numberOfThreads": null,
            "terminal_output": null,
            "versionID": null
          },
          "module": "semtools.utilities.brains",
          "name": "fcsv_to_hdf5",
          "outputs": {
            "landmarksInformationFile": null,
            "modelFile": null
          },
          "type": null
        },
        "semtools.utilities.brains.insertMidACPCpoint": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputLandmarkFile": null,
            "outputLandmarkFile": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "insertMidACPCpoint",
          "outputs": {
            "outputLandmarkFile": null
          },
          "type": null
        },
        "semtools.utilities.brains.landmarksConstellationAligner": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputLandmarksPaired": null,
            "outputLandmarksPaired": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "landmarksConstellationAligner",
          "outputs": {
            "outputLandmarksPaired": null
          },
          "type": null
        },
        "semtools.utilities.brains.landmarksConstellationWeights": {
          "inputs": {
            "LLSModel": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputTemplateModel": null,
            "inputTrainingList": null,
            "outputWeightsList": null,
            "terminal_output": null
          },
          "module": "semtools.utilities.brains",
          "name": "landmarksConstellationWeights",
          "outputs": {
            "outputWeightsList": null
          },
          "type": null
        },
        "slicer.converters.DicomToNrrdConverter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputDicomDirectory": null,
            "outputDirectory": null,
            "outputVolume": null,
            "smallGradientThreshold": null,
            "terminal_output": null,
            "useBMatrixGradientDirections": null,
            "useIdentityMeaseurementFrame": null,
            "writeProtocolGradientsFile": null
          },
          "module": "slicer.converters",
          "name": "DicomToNrrdConverter",
          "outputs": {
            "outputDirectory": null
          },
          "type": null
        },
        "slicer.converters.OrientScalarVolume": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume1": null,
            "orientation": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "slicer.converters",
          "name": "OrientScalarVolume",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.diffusion.diffusion.DTIexport": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputTensor": null,
            "outputFile": null,
            "terminal_output": null
          },
          "module": "slicer.diffusion.diffusion",
          "name": "DTIexport",
          "outputs": {
            "outputFile": null
          },
          "type": null
        },
        "slicer.diffusion.diffusion.DTIimport": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputFile": null,
            "outputTensor": null,
            "terminal_output": null,
            "testingmode": null
          },
          "module": "slicer.diffusion.diffusion",
          "name": "DTIimport",
          "outputs": {
            "outputTensor": null
          },
          "type": null
        },
        "slicer.diffusion.diffusion.DWIJointRicianLMMSEFilter": {
          "inputs": {
            "args": null,
            "compressOutput": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "ng": null,
            "outputVolume": null,
            "re": null,
            "rf": null,
            "terminal_output": null
          },
          "module": "slicer.diffusion.diffusion",
          "name": "DWIJointRicianLMMSEFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.diffusion.diffusion.DWIRicianLMMSEFilter": {
          "inputs": {
            "args": null,
            "compressOutput": null,
            "environ": {},
            "hrf": null,
            "ignore_exception": false,
            "inputVolume": null,
            "iter": null,
            "maxnstd": null,
            "minnstd": null,
            "mnve": null,
            "mnvf": null,
            "outputVolume": null,
            "re": null,
            "rf": null,
            "terminal_output": null,
            "uav": null
          },
          "module": "slicer.diffusion.diffusion",
          "name": "DWIRicianLMMSEFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.diffusion.diffusion.DWIToDTIEstimation": {
          "inputs": {
            "args": null,
            "enumeration": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "mask": null,
            "outputBaseline": null,
            "outputTensor": null,
            "shiftNeg": null,
            "terminal_output": null
          },
          "module": "slicer.diffusion.diffusion",
          "name": "DWIToDTIEstimation",
          "outputs": {
            "outputBaseline": null,
            "outputTensor": null
          },
          "type": null
        },
        "slicer.diffusion.diffusion.DiffusionTensorScalarMeasurements": {
          "inputs": {
            "args": null,
            "enumeration": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "outputScalar": null,
            "terminal_output": null
          },
          "module": "slicer.diffusion.diffusion",
          "name": "DiffusionTensorScalarMeasurements",
          "outputs": {
            "outputScalar": null
          },
          "type": null
        },
        "slicer.diffusion.diffusion.DiffusionWeightedVolumeMasking": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "otsuomegathreshold": null,
            "outputBaseline": null,
            "removeislands": null,
            "terminal_output": null,
            "thresholdMask": null
          },
          "module": "slicer.diffusion.diffusion",
          "name": "DiffusionWeightedVolumeMasking",
          "outputs": {
            "outputBaseline": null,
            "thresholdMask": null
          },
          "type": null
        },
        "slicer.diffusion.diffusion.ResampleDTIVolume": {
          "inputs": {
            "Inverse_ITK_Transformation": null,
            "Reference": null,
            "args": null,
            "centered_transform": null,
            "correction": null,
            "defField": null,
            "default_pixel_value": null,
            "direction_matrix": null,
            "environ": {},
            "hfieldtype": null,
            "ignore_exception": false,
            "image_center": null,
            "inputVolume": null,
            "interpolation": null,
            "notbulk": null,
            "number_of_thread": null,
            "origin": null,
            "outputVolume": null,
            "rotation_point": null,
            "size": null,
            "spaceChange": null,
            "spacing": null,
            "spline_order": null,
            "terminal_output": null,
            "transform": null,
            "transform_matrix": null,
            "transform_order": null,
            "transform_tensor_method": null,
            "transformationFile": null,
            "window_function": null
          },
          "module": "slicer.diffusion.diffusion",
          "name": "ResampleDTIVolume",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.diffusion.diffusion.TractographyLabelMapSeeding": {
          "inputs": {
            "InputVolume": null,
            "OutputFibers": null,
            "args": null,
            "clthreshold": null,
            "environ": {},
            "ignore_exception": false,
            "inputroi": null,
            "integrationsteplength": null,
            "label": null,
            "maximumlength": null,
            "minimumlength": null,
            "name": null,
            "outputdirectory": null,
            "randomgrid": null,
            "seedspacing": null,
            "stoppingcurvature": null,
            "stoppingmode": null,
            "stoppingvalue": null,
            "terminal_output": null,
            "useindexspace": null,
            "writetofile": null
          },
          "module": "slicer.diffusion.diffusion",
          "name": "TractographyLabelMapSeeding",
          "outputs": {
            "OutputFibers": null,
            "outputdirectory": null
          },
          "type": null
        },
        "slicer.filtering.arithmetic.AddScalarVolumes": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume1": null,
            "inputVolume2": null,
            "order": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "slicer.filtering.arithmetic",
          "name": "AddScalarVolumes",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.arithmetic.CastScalarVolume": {
          "inputs": {
            "InputVolume": null,
            "OutputVolume": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "terminal_output": null,
            "type": null
          },
          "module": "slicer.filtering.arithmetic",
          "name": "CastScalarVolume",
          "outputs": {
            "OutputVolume": null
          },
          "type": null
        },
        "slicer.filtering.arithmetic.MaskScalarVolume": {
          "inputs": {
            "InputVolume": null,
            "MaskVolume": null,
            "OutputVolume": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "label": null,
            "replace": null,
            "terminal_output": null
          },
          "module": "slicer.filtering.arithmetic",
          "name": "MaskScalarVolume",
          "outputs": {
            "OutputVolume": null
          },
          "type": null
        },
        "slicer.filtering.arithmetic.MultiplyScalarVolumes": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume1": null,
            "inputVolume2": null,
            "order": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "slicer.filtering.arithmetic",
          "name": "MultiplyScalarVolumes",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.arithmetic.SubtractScalarVolumes": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume1": null,
            "inputVolume2": null,
            "order": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "slicer.filtering.arithmetic",
          "name": "SubtractScalarVolumes",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.checkerboardfilter.CheckerBoardFilter": {
          "inputs": {
            "args": null,
            "checkerPattern": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume1": null,
            "inputVolume2": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "slicer.filtering.checkerboardfilter",
          "name": "CheckerBoardFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.denoising.CurvatureAnisotropicDiffusion": {
          "inputs": {
            "args": null,
            "conductance": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "iterations": null,
            "outputVolume": null,
            "terminal_output": null,
            "timeStep": null
          },
          "module": "slicer.filtering.denoising",
          "name": "CurvatureAnisotropicDiffusion",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.denoising.GaussianBlurImageFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "outputVolume": null,
            "sigma": null,
            "terminal_output": null
          },
          "module": "slicer.filtering.denoising",
          "name": "GaussianBlurImageFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.denoising.GradientAnisotropicDiffusion": {
          "inputs": {
            "args": null,
            "conductance": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "iterations": null,
            "outputVolume": null,
            "terminal_output": null,
            "timeStep": null
          },
          "module": "slicer.filtering.denoising",
          "name": "GradientAnisotropicDiffusion",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.denoising.MedianImageFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "neighborhood": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "slicer.filtering.denoising",
          "name": "MedianImageFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.extractskeleton.ExtractSkeleton": {
          "inputs": {
            "InputImageFileName": null,
            "OutputImageFileName": null,
            "args": null,
            "dontPrune": null,
            "environ": {},
            "ignore_exception": false,
            "numPoints": null,
            "pointsFile": null,
            "terminal_output": null,
            "type": null
          },
          "module": "slicer.filtering.extractskeleton",
          "name": "ExtractSkeleton",
          "outputs": {
            "OutputImageFileName": null
          },
          "type": null
        },
        "slicer.filtering.histogrammatching.HistogramMatching": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfHistogramLevels": null,
            "numberOfMatchPoints": null,
            "outputVolume": null,
            "referenceVolume": null,
            "terminal_output": null,
            "threshold": null
          },
          "module": "slicer.filtering.histogrammatching",
          "name": "HistogramMatching",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.imagelabelcombine.ImageLabelCombine": {
          "inputs": {
            "InputLabelMap_A": null,
            "InputLabelMap_B": null,
            "OutputLabelMap": null,
            "args": null,
            "environ": {},
            "first_overwrites": null,
            "ignore_exception": false,
            "terminal_output": null
          },
          "module": "slicer.filtering.imagelabelcombine",
          "name": "ImageLabelCombine",
          "outputs": {
            "OutputLabelMap": null
          },
          "type": null
        },
        "slicer.filtering.morphology.GrayscaleFillHoleImageFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "slicer.filtering.morphology",
          "name": "GrayscaleFillHoleImageFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.morphology.GrayscaleGrindPeakImageFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "slicer.filtering.morphology",
          "name": "GrayscaleGrindPeakImageFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.n4itkbiasfieldcorrection.N4ITKBiasFieldCorrection": {
          "inputs": {
            "args": null,
            "bsplineorder": null,
            "convergencethreshold": null,
            "environ": {},
            "histogramsharpening": null,
            "ignore_exception": false,
            "inputimage": null,
            "iterations": null,
            "maskimage": null,
            "meshresolution": null,
            "outputbiasfield": null,
            "outputimage": null,
            "shrinkfactor": null,
            "splinedistance": null,
            "terminal_output": null,
            "weightimage": null
          },
          "module": "slicer.filtering.n4itkbiasfieldcorrection",
          "name": "N4ITKBiasFieldCorrection",
          "outputs": {
            "outputbiasfield": null,
            "outputimage": null
          },
          "type": null
        },
        "slicer.filtering.resamplescalarvectordwivolume.ResampleScalarVectorDWIVolume": {
          "inputs": {
            "Inverse_ITK_Transformation": null,
            "Reference": null,
            "args": null,
            "centered_transform": null,
            "defField": null,
            "default_pixel_value": null,
            "direction_matrix": null,
            "environ": {},
            "hfieldtype": null,
            "ignore_exception": false,
            "image_center": null,
            "inputVolume": null,
            "interpolation": null,
            "notbulk": null,
            "number_of_thread": null,
            "origin": null,
            "outputVolume": null,
            "rotation_point": null,
            "size": null,
            "spaceChange": null,
            "spacing": null,
            "spline_order": null,
            "terminal_output": null,
            "transform": null,
            "transform_matrix": null,
            "transform_order": null,
            "transformationFile": null,
            "window_function": null
          },
          "module": "slicer.filtering.resamplescalarvectordwivolume",
          "name": "ResampleScalarVectorDWIVolume",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.filtering.thresholdscalarvolume.ThresholdScalarVolume": {
          "inputs": {
            "InputVolume": null,
            "OutputVolume": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "lower": null,
            "outsidevalue": null,
            "terminal_output": null,
            "threshold": null,
            "thresholdtype": null,
            "upper": null
          },
          "module": "slicer.filtering.thresholdscalarvolume",
          "name": "ThresholdScalarVolume",
          "outputs": {
            "OutputVolume": null
          },
          "type": null
        },
        "slicer.filtering.votingbinaryholefillingimagefilter.VotingBinaryHoleFillingImageFilter": {
          "inputs": {
            "args": null,
            "background": null,
            "environ": {},
            "foreground": null,
            "ignore_exception": false,
            "inputVolume": null,
            "majorityThreshold": null,
            "outputVolume": null,
            "radius": null,
            "terminal_output": null
          },
          "module": "slicer.filtering.votingbinaryholefillingimagefilter",
          "name": "VotingBinaryHoleFillingImageFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.legacy.converters.BSplineToDeformationField": {
          "inputs": {
            "args": null,
            "defImage": null,
            "environ": {},
            "ignore_exception": false,
            "refImage": null,
            "terminal_output": null,
            "tfm": null
          },
          "module": "slicer.legacy.converters",
          "name": "BSplineToDeformationField",
          "outputs": {
            "defImage": null
          },
          "type": null
        },
        "slicer.legacy.diffusion.denoising.DWIUnbiasedNonLocalMeansFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "hp": null,
            "ignore_exception": false,
            "inputVolume": null,
            "ng": null,
            "outputVolume": null,
            "rc": null,
            "re": null,
            "rs": null,
            "terminal_output": null
          },
          "module": "slicer.legacy.diffusion.denoising",
          "name": "DWIUnbiasedNonLocalMeansFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.legacy.filtering.OtsuThresholdImageFilter": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "insideValue": null,
            "numberOfBins": null,
            "outputVolume": null,
            "outsideValue": null,
            "terminal_output": null
          },
          "module": "slicer.legacy.filtering",
          "name": "OtsuThresholdImageFilter",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.legacy.filtering.ResampleScalarVolume": {
          "inputs": {
            "InputVolume": null,
            "OutputVolume": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "interpolation": null,
            "spacing": null,
            "terminal_output": null
          },
          "module": "slicer.legacy.filtering",
          "name": "ResampleScalarVolume",
          "outputs": {
            "OutputVolume": null
          },
          "type": null
        },
        "slicer.legacy.registration.AffineRegistration": {
          "inputs": {
            "FixedImageFileName": null,
            "MovingImageFileName": null,
            "args": null,
            "environ": {},
            "fixedsmoothingfactor": null,
            "histogrambins": null,
            "ignore_exception": false,
            "initialtransform": null,
            "iterations": null,
            "movingsmoothingfactor": null,
            "outputtransform": null,
            "resampledmovingfilename": null,
            "spatialsamples": null,
            "terminal_output": null,
            "translationscale": null
          },
          "module": "slicer.legacy.registration",
          "name": "AffineRegistration",
          "outputs": {
            "outputtransform": null,
            "resampledmovingfilename": null
          },
          "type": null
        },
        "slicer.legacy.registration.BSplineDeformableRegistration": {
          "inputs": {
            "FixedImageFileName": null,
            "MovingImageFileName": null,
            "args": null,
            "constrain": null,
            "default": null,
            "environ": {},
            "gridSize": null,
            "histogrambins": null,
            "ignore_exception": false,
            "initialtransform": null,
            "iterations": null,
            "maximumDeformation": null,
            "outputtransform": null,
            "outputwarp": null,
            "resampledmovingfilename": null,
            "spatialsamples": null,
            "terminal_output": null
          },
          "module": "slicer.legacy.registration",
          "name": "BSplineDeformableRegistration",
          "outputs": {
            "outputtransform": null,
            "outputwarp": null,
            "resampledmovingfilename": null
          },
          "type": null
        },
        "slicer.legacy.registration.ExpertAutomatedRegistration": {
          "inputs": {
            "affineMaxIterations": null,
            "affineSamplingRatio": null,
            "args": null,
            "bsplineMaxIterations": null,
            "bsplineSamplingRatio": null,
            "controlPointSpacing": null,
            "environ": {},
            "expectedOffset": null,
            "expectedRotation": null,
            "expectedScale": null,
            "expectedSkew": null,
            "fixedImage": null,
            "fixedImageMask": null,
            "fixedLandmarks": null,
            "ignore_exception": false,
            "initialization": null,
            "interpolation": null,
            "loadTransform": null,
            "metric": null,
            "minimizeMemory": null,
            "movingImage": null,
            "movingLandmarks": null,
            "numberOfThreads": null,
            "randomNumberSeed": null,
            "registration": null,
            "resampledImage": null,
            "rigidMaxIterations": null,
            "rigidSamplingRatio": null,
            "sampleFromOverlap": null,
            "saveTransform": null,
            "terminal_output": null,
            "verbosityLevel": null
          },
          "module": "slicer.legacy.registration",
          "name": "ExpertAutomatedRegistration",
          "outputs": {
            "resampledImage": null,
            "saveTransform": null
          },
          "type": null
        },
        "slicer.legacy.registration.LinearRegistration": {
          "inputs": {
            "FixedImageFileName": null,
            "MovingImageFileName": null,
            "args": null,
            "environ": {},
            "fixedsmoothingfactor": null,
            "histogrambins": null,
            "ignore_exception": false,
            "initialtransform": null,
            "iterations": null,
            "learningrate": null,
            "movingsmoothingfactor": null,
            "outputtransform": null,
            "resampledmovingfilename": null,
            "spatialsamples": null,
            "terminal_output": null,
            "translationscale": null
          },
          "module": "slicer.legacy.registration",
          "name": "LinearRegistration",
          "outputs": {
            "outputtransform": null,
            "resampledmovingfilename": null
          },
          "type": null
        },
        "slicer.legacy.registration.MultiResolutionAffineRegistration": {
          "inputs": {
            "args": null,
            "environ": {},
            "fixedImage": null,
            "fixedImageMask": null,
            "fixedImageROI": null,
            "ignore_exception": false,
            "metricTolerance": null,
            "movingImage": null,
            "numIterations": null,
            "numLineIterations": null,
            "resampledImage": null,
            "saveTransform": null,
            "stepSize": null,
            "stepTolerance": null,
            "terminal_output": null
          },
          "module": "slicer.legacy.registration",
          "name": "MultiResolutionAffineRegistration",
          "outputs": {
            "resampledImage": null,
            "saveTransform": null
          },
          "type": null
        },
        "slicer.legacy.registration.RigidRegistration": {
          "inputs": {
            "FixedImageFileName": null,
            "MovingImageFileName": null,
            "args": null,
            "environ": {},
            "fixedsmoothingfactor": null,
            "histogrambins": null,
            "ignore_exception": false,
            "initialtransform": null,
            "iterations": null,
            "learningrate": null,
            "movingsmoothingfactor": null,
            "outputtransform": null,
            "resampledmovingfilename": null,
            "spatialsamples": null,
            "terminal_output": null,
            "testingmode": null,
            "translationscale": null
          },
          "module": "slicer.legacy.registration",
          "name": "RigidRegistration",
          "outputs": {
            "outputtransform": null,
            "resampledmovingfilename": null
          },
          "type": null
        },
        "slicer.legacy.segmentation.OtsuThresholdSegmentation": {
          "inputs": {
            "args": null,
            "brightObjects": null,
            "environ": {},
            "faceConnected": null,
            "ignore_exception": false,
            "inputVolume": null,
            "minimumObjectSize": null,
            "numberOfBins": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "slicer.legacy.segmentation",
          "name": "OtsuThresholdSegmentation",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.quantification.changequantification.IntensityDifferenceMetric": {
          "inputs": {
            "args": null,
            "baselineSegmentationVolume": null,
            "baselineVolume": null,
            "changingBandSize": null,
            "environ": {},
            "followupVolume": null,
            "ignore_exception": false,
            "outputVolume": null,
            "reportFileName": null,
            "sensitivityThreshold": null,
            "terminal_output": null
          },
          "module": "slicer.quantification.changequantification",
          "name": "IntensityDifferenceMetric",
          "outputs": {
            "outputVolume": null,
            "reportFileName": null
          },
          "type": null
        },
        "slicer.quantification.petstandarduptakevaluecomputation.PETStandardUptakeValueComputation": {
          "inputs": {
            "OutputLabel": null,
            "OutputLabelValue": null,
            "SUVMax": null,
            "SUVMean": null,
            "SUVMin": null,
            "args": null,
            "color": null,
            "csvFile": null,
            "environ": {},
            "ignore_exception": false,
            "labelMap": null,
            "petDICOMPath": null,
            "petVolume": null,
            "terminal_output": null
          },
          "module": "slicer.quantification.petstandarduptakevaluecomputation",
          "name": "PETStandardUptakeValueComputation",
          "outputs": {
            "csvFile": null
          },
          "type": null
        },
        "slicer.registration.brainsfit.BRAINSFit": {
          "inputs": {
            "NEVER_USE_THIS_FLAG_IT_IS_OUTDATED_00": null,
            "NEVER_USE_THIS_FLAG_IT_IS_OUTDATED_01": null,
            "NEVER_USE_THIS_FLAG_IT_IS_OUTDATED_02": null,
            "ROIAutoClosingSize": null,
            "ROIAutoDilateSize": null,
            "args": null,
            "backgroundFillValue": null,
            "bsplineTransform": null,
            "costFunctionConvergenceFactor": null,
            "costMetric": null,
            "debugLevel": null,
            "environ": {},
            "failureExitCode": null,
            "fixedBinaryVolume": null,
            "fixedVolume": null,
            "fixedVolumeTimeIndex": null,
            "forceMINumberOfThreads": null,
            "gui": null,
            "histogramMatch": null,
            "ignore_exception": false,
            "initialTransform": null,
            "initializeTransformMode": null,
            "interpolationMode": null,
            "linearTransform": null,
            "maskInferiorCutOffFromCenter": null,
            "maskProcessingMode": null,
            "maxBSplineDisplacement": null,
            "maximumStepLength": null,
            "medianFilterSize": null,
            "minimumStepLength": null,
            "movingBinaryVolume": null,
            "movingVolume": null,
            "movingVolumeTimeIndex": null,
            "numberOfHistogramBins": null,
            "numberOfIterations": null,
            "numberOfMatchPoints": null,
            "numberOfSamples": null,
            "numberOfThreads": null,
            "outputFixedVolumeROI": null,
            "outputMovingVolumeROI": null,
            "outputTransform": null,
            "outputVolume": null,
            "outputVolumePixelType": null,
            "permitParameterVariation": null,
            "projectedGradientTolerance": null,
            "promptUser": null,
            "relaxationFactor": null,
            "removeIntensityOutliers": null,
            "reproportionScale": null,
            "scaleOutputValues": null,
            "skewScale": null,
            "splineGridSize": null,
            "strippedOutputTransform": null,
            "terminal_output": null,
            "transformType": null,
            "translationScale": null,
            "useAffine": null,
            "useBSpline": null,
            "useCachingOfBSplineWeightsMode": null,
            "useExplicitPDFDerivativesMode": null,
            "useRigid": null,
            "useScaleSkewVersor3D": null,
            "useScaleVersor3D": null,
            "writeOutputTransformInFloat": null,
            "writeTransformOnFailure": null
          },
          "module": "slicer.registration.brainsfit",
          "name": "BRAINSFit",
          "outputs": {
            "bsplineTransform": null,
            "linearTransform": null,
            "outputFixedVolumeROI": null,
            "outputMovingVolumeROI": null,
            "outputTransform": null,
            "outputVolume": null,
            "strippedOutputTransform": null
          },
          "type": null
        },
        "slicer.registration.brainsresample.BRAINSResample": {
          "inputs": {
            "args": null,
            "defaultValue": null,
            "deformationVolume": null,
            "environ": {},
            "gridSpacing": null,
            "ignore_exception": false,
            "inputVolume": null,
            "interpolationMode": null,
            "inverseTransform": null,
            "numberOfThreads": null,
            "outputVolume": null,
            "pixelType": null,
            "referenceVolume": null,
            "terminal_output": null,
            "warpTransform": null
          },
          "module": "slicer.registration.brainsresample",
          "name": "BRAINSResample",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.registration.specialized.ACPCTransform": {
          "inputs": {
            "acpc": null,
            "args": null,
            "debugSwitch": null,
            "environ": {},
            "ignore_exception": false,
            "midline": null,
            "outputTransform": null,
            "terminal_output": null
          },
          "module": "slicer.registration.specialized",
          "name": "ACPCTransform",
          "outputs": {
            "outputTransform": null
          },
          "type": null
        },
        "slicer.registration.specialized.BRAINSDemonWarp": {
          "inputs": {
            "args": null,
            "arrayOfPyramidLevelIterations": null,
            "backgroundFillValue": null,
            "checkerboardPatternSubdivisions": null,
            "environ": {},
            "fixedBinaryVolume": null,
            "fixedVolume": null,
            "gradient_type": null,
            "gui": null,
            "histogramMatch": null,
            "ignore_exception": false,
            "initializeWithDisplacementField": null,
            "initializeWithTransform": null,
            "inputPixelType": null,
            "interpolationMode": null,
            "lowerThresholdForBOBF": null,
            "maskProcessingMode": null,
            "max_step_length": null,
            "medianFilterSize": null,
            "minimumFixedPyramid": null,
            "minimumMovingPyramid": null,
            "movingBinaryVolume": null,
            "movingVolume": null,
            "neighborhoodForBOBF": null,
            "numberOfBCHApproximationTerms": null,
            "numberOfHistogramBins": null,
            "numberOfMatchPoints": null,
            "numberOfPyramidLevels": null,
            "numberOfThreads": null,
            "outputCheckerboardVolume": null,
            "outputDebug": null,
            "outputDisplacementFieldPrefix": null,
            "outputDisplacementFieldVolume": null,
            "outputNormalized": null,
            "outputPixelType": null,
            "outputVolume": null,
            "promptUser": null,
            "registrationFilterType": null,
            "seedForBOBF": null,
            "smoothDisplacementFieldSigma": null,
            "terminal_output": null,
            "upFieldSmoothing": null,
            "upperThresholdForBOBF": null,
            "use_vanilla_dem": null
          },
          "module": "slicer.registration.specialized",
          "name": "BRAINSDemonWarp",
          "outputs": {
            "outputCheckerboardVolume": null,
            "outputDisplacementFieldVolume": null,
            "outputVolume": null
          },
          "type": null
        },
        "slicer.registration.specialized.FiducialRegistration": {
          "inputs": {
            "args": null,
            "environ": {},
            "fixedLandmarks": null,
            "ignore_exception": false,
            "movingLandmarks": null,
            "outputMessage": null,
            "rms": null,
            "saveTransform": null,
            "terminal_output": null,
            "transformType": null
          },
          "module": "slicer.registration.specialized",
          "name": "FiducialRegistration",
          "outputs": {
            "saveTransform": null
          },
          "type": null
        },
        "slicer.registration.specialized.VBRAINSDemonWarp": {
          "inputs": {
            "args": null,
            "arrayOfPyramidLevelIterations": null,
            "backgroundFillValue": null,
            "checkerboardPatternSubdivisions": null,
            "environ": {},
            "fixedBinaryVolume": null,
            "fixedVolume": null,
            "gradient_type": null,
            "gui": null,
            "histogramMatch": null,
            "ignore_exception": false,
            "initializeWithDisplacementField": null,
            "initializeWithTransform": null,
            "inputPixelType": null,
            "interpolationMode": null,
            "lowerThresholdForBOBF": null,
            "makeBOBF": null,
            "max_step_length": null,
            "medianFilterSize": null,
            "minimumFixedPyramid": null,
            "minimumMovingPyramid": null,
            "movingBinaryVolume": null,
            "movingVolume": null,
            "neighborhoodForBOBF": null,
            "numberOfBCHApproximationTerms": null,
            "numberOfHistogramBins": null,
            "numberOfMatchPoints": null,
            "numberOfPyramidLevels": null,
            "numberOfThreads": null,
            "outputCheckerboardVolume": null,
            "outputDebug": null,
            "outputDisplacementFieldPrefix": null,
            "outputDisplacementFieldVolume": null,
            "outputNormalized": null,
            "outputPixelType": null,
            "outputVolume": null,
            "promptUser": null,
            "registrationFilterType": null,
            "seedForBOBF": null,
            "smoothDisplacementFieldSigma": null,
            "terminal_output": null,
            "upFieldSmoothing": null,
            "upperThresholdForBOBF": null,
            "use_vanilla_dem": null,
            "weightFactors": null
          },
          "module": "slicer.registration.specialized",
          "name": "VBRAINSDemonWarp",
          "outputs": {
            "outputCheckerboardVolume": null,
            "outputDisplacementFieldVolume": null,
            "outputVolume": null
          },
          "type": null
        },
        "slicer.segmentation.simpleregiongrowingsegmentation.SimpleRegionGrowingSegmentation": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "iterations": null,
            "labelvalue": null,
            "multiplier": null,
            "neighborhood": null,
            "outputVolume": null,
            "seed": null,
            "smoothingIterations": null,
            "terminal_output": null,
            "timestep": null
          },
          "module": "slicer.segmentation.simpleregiongrowingsegmentation",
          "name": "SimpleRegionGrowingSegmentation",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.segmentation.specialized.BRAINSROIAuto": {
          "inputs": {
            "ROIAutoDilateSize": null,
            "args": null,
            "closingSize": null,
            "environ": {},
            "ignore_exception": false,
            "inputVolume": null,
            "numberOfThreads": null,
            "otsuPercentileThreshold": null,
            "outputClippedVolumeROI": null,
            "outputROIMaskVolume": null,
            "outputVolumePixelType": null,
            "terminal_output": null,
            "thresholdCorrectionFactor": null
          },
          "module": "slicer.segmentation.specialized",
          "name": "BRAINSROIAuto",
          "outputs": {
            "outputClippedVolumeROI": null,
            "outputROIMaskVolume": null
          },
          "type": null
        },
        "slicer.segmentation.specialized.EMSegmentCommandLine": {
          "inputs": {
            "args": null,
            "atlasVolumeFileNames": null,
            "disableCompression": null,
            "disableMultithreading": null,
            "dontUpdateIntermediateData": null,
            "dontWriteResults": null,
            "environ": {},
            "generateEmptyMRMLSceneAndQuit": null,
            "ignore_exception": false,
            "intermediateResultsDirectory": null,
            "keepTempFiles": null,
            "loadAtlasNonCentered": null,
            "loadTargetCentered": null,
            "mrmlSceneFileName": null,
            "parametersMRMLNodeName": null,
            "registrationAffineType": null,
            "registrationDeformableType": null,
            "registrationPackage": null,
            "resultMRMLSceneFileName": null,
            "resultStandardVolumeFileName": null,
            "resultVolumeFileName": null,
            "targetVolumeFileNames": null,
            "taskPreProcessingSetting": null,
            "terminal_output": null,
            "verbose": null
          },
          "module": "slicer.segmentation.specialized",
          "name": "EMSegmentCommandLine",
          "outputs": {
            "generateEmptyMRMLSceneAndQuit": null,
            "resultMRMLSceneFileName": null,
            "resultVolumeFileName": null
          },
          "type": null
        },
        "slicer.segmentation.specialized.RobustStatisticsSegmenter": {
          "inputs": {
            "args": null,
            "curvatureWeight": null,
            "environ": {},
            "expectedVolume": null,
            "ignore_exception": false,
            "intensityHomogeneity": null,
            "labelImageFileName": null,
            "labelValue": null,
            "maxRunningTime": null,
            "originalImageFileName": null,
            "segmentedImageFileName": null,
            "terminal_output": null
          },
          "module": "slicer.segmentation.specialized",
          "name": "RobustStatisticsSegmenter",
          "outputs": {
            "segmentedImageFileName": null
          },
          "type": null
        },
        "slicer.surface.GrayscaleModelMaker": {
          "inputs": {
            "InputVolume": null,
            "OutputGeometry": null,
            "args": null,
            "decimate": null,
            "environ": {},
            "ignore_exception": false,
            "name": null,
            "pointnormals": null,
            "smooth": null,
            "splitnormals": null,
            "terminal_output": null,
            "threshold": null
          },
          "module": "slicer.surface",
          "name": "GrayscaleModelMaker",
          "outputs": {
            "OutputGeometry": null
          },
          "type": null
        },
        "slicer.surface.LabelMapSmoothing": {
          "inputs": {
            "args": null,
            "environ": {},
            "gaussianSigma": null,
            "ignore_exception": false,
            "inputVolume": null,
            "labelToSmooth": null,
            "maxRMSError": null,
            "numberOfIterations": null,
            "outputVolume": null,
            "terminal_output": null
          },
          "module": "slicer.surface",
          "name": "LabelMapSmoothing",
          "outputs": {
            "outputVolume": null
          },
          "type": null
        },
        "slicer.surface.MergeModels": {
          "inputs": {
            "Model1": null,
            "Model2": null,
            "ModelOutput": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "terminal_output": null
          },
          "module": "slicer.surface",
          "name": "MergeModels",
          "outputs": {
            "ModelOutput": null
          },
          "type": null
        },
        "slicer.surface.ModelMaker": {
          "inputs": {
            "InputVolume": null,
            "args": null,
            "color": null,
            "debug": null,
            "decimate": null,
            "end": null,
            "environ": {},
            "filtertype": null,
            "generateAll": null,
            "ignore_exception": false,
            "jointsmooth": null,
            "labels": null,
            "modelSceneFile": null,
            "name": null,
            "pad": null,
            "pointnormals": null,
            "saveIntermediateModels": null,
            "skipUnNamed": null,
            "smooth": null,
            "splitnormals": null,
            "start": null,
            "terminal_output": null
          },
          "module": "slicer.surface",
          "name": "ModelMaker",
          "outputs": {
            "modelSceneFile": null
          },
          "type": null
        },
        "slicer.surface.ModelToLabelMap": {
          "inputs": {
            "InputVolume": null,
            "OutputVolume": null,
            "args": null,
            "distance": null,
            "environ": {},
            "ignore_exception": false,
            "surface": null,
            "terminal_output": null
          },
          "module": "slicer.surface",
          "name": "ModelToLabelMap",
          "outputs": {
            "OutputVolume": null
          },
          "type": null
        },
        "slicer.surface.ProbeVolumeWithModel": {
          "inputs": {
            "InputModel": null,
            "InputVolume": null,
            "OutputModel": null,
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "terminal_output": null
          },
          "module": "slicer.surface",
          "name": "ProbeVolumeWithModel",
          "outputs": {
            "OutputModel": null
          },
          "type": null
        },
        "slicer.utilities.EMSegmentTransformToNewFormat": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "inputMRMLFileName": null,
            "outputMRMLFileName": null,
            "templateFlag": null,
            "terminal_output": null
          },
          "module": "slicer.utilities",
          "name": "EMSegmentTransformToNewFormat",
          "outputs": {
            "outputMRMLFileName": null
          },
          "type": null
        },
        "spm.base.SPMCommand": {
          "inputs": {
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.base",
          "name": "SPMCommand",
          "outputs": {},
          "type": null
        },
        "spm.model.EstimateContrast": {
          "inputs": {
            "beta_images": null,
            "contrasts": null,
            "group_contrast": null,
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "residual_image": null,
            "spm_mat_file": null,
            "use_derivs": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.model",
          "name": "EstimateContrast",
          "outputs": {
            "con_images": null,
            "ess_images": null,
            "spmF_images": null,
            "spmT_images": null,
            "spm_mat_file": null
          },
          "type": null
        },
        "spm.model.EstimateModel": {
          "inputs": {
            "estimation_method": null,
            "flags": null,
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "spm_mat_file": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.model",
          "name": "EstimateModel",
          "outputs": {
            "RPVimage": null,
            "beta_images": null,
            "mask_image": null,
            "residual_image": null,
            "spm_mat_file": null
          },
          "type": null
        },
        "spm.model.FactorialDesign": {
          "inputs": {
            "covariates": null,
            "explicit_mask_file": null,
            "global_calc_mean": null,
            "global_calc_omit": null,
            "global_calc_values": null,
            "global_normalization": null,
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "no_grand_mean_scaling": null,
            "paths": null,
            "spm_mat_dir": null,
            "threshold_mask_absolute": null,
            "threshold_mask_none": null,
            "threshold_mask_relative": null,
            "use_implicit_threshold": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.model",
          "name": "FactorialDesign",
          "outputs": {
            "spm_mat_file": null
          },
          "type": null
        },
        "spm.model.Level1Design": {
          "inputs": {
            "bases": null,
            "factor_info": null,
            "global_intensity_normalization": null,
            "ignore_exception": false,
            "interscan_interval": null,
            "mask_image": null,
            "mask_threshold": "-Inf",
            "matlab_cmd": null,
            "mfile": true,
            "microtime_onset": null,
            "microtime_resolution": null,
            "model_serial_correlations": null,
            "paths": null,
            "session_info": null,
            "spm_mat_dir": null,
            "timing_units": null,
            "use_mcr": null,
            "use_v8struct": true,
            "volterra_expansion_order": null
          },
          "module": "spm.model",
          "name": "Level1Design",
          "outputs": {
            "spm_mat_file": null
          },
          "type": null
        },
        "spm.model.MultipleRegressionDesign": {
          "inputs": {
            "covariates": null,
            "explicit_mask_file": null,
            "global_calc_mean": null,
            "global_calc_omit": null,
            "global_calc_values": null,
            "global_normalization": null,
            "ignore_exception": false,
            "in_files": null,
            "include_intercept": true,
            "matlab_cmd": null,
            "mfile": true,
            "no_grand_mean_scaling": null,
            "paths": null,
            "spm_mat_dir": null,
            "threshold_mask_absolute": null,
            "threshold_mask_none": null,
            "threshold_mask_relative": null,
            "use_implicit_threshold": null,
            "use_mcr": null,
            "use_v8struct": true,
            "user_covariates": null
          },
          "module": "spm.model",
          "name": "MultipleRegressionDesign",
          "outputs": {
            "spm_mat_file": null
          },
          "type": null
        },
        "spm.model.OneSampleTTestDesign": {
          "inputs": {
            "covariates": null,
            "explicit_mask_file": null,
            "global_calc_mean": null,
            "global_calc_omit": null,
            "global_calc_values": null,
            "global_normalization": null,
            "ignore_exception": false,
            "in_files": null,
            "matlab_cmd": null,
            "mfile": true,
            "no_grand_mean_scaling": null,
            "paths": null,
            "spm_mat_dir": null,
            "threshold_mask_absolute": null,
            "threshold_mask_none": null,
            "threshold_mask_relative": null,
            "use_implicit_threshold": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.model",
          "name": "OneSampleTTestDesign",
          "outputs": {
            "spm_mat_file": null
          },
          "type": null
        },
        "spm.model.PairedTTestDesign": {
          "inputs": {
            "ancova": null,
            "covariates": null,
            "explicit_mask_file": null,
            "global_calc_mean": null,
            "global_calc_omit": null,
            "global_calc_values": null,
            "global_normalization": null,
            "grand_mean_scaling": null,
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "no_grand_mean_scaling": null,
            "paired_files": null,
            "paths": null,
            "spm_mat_dir": null,
            "threshold_mask_absolute": null,
            "threshold_mask_none": null,
            "threshold_mask_relative": null,
            "use_implicit_threshold": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.model",
          "name": "PairedTTestDesign",
          "outputs": {
            "spm_mat_file": null
          },
          "type": null
        },
        "spm.model.Threshold": {
          "inputs": {
            "contrast_index": null,
            "extent_fdr_p_threshold": 0.05,
            "extent_threshold": 0,
            "force_activation": false,
            "height_threshold": 0.05,
            "height_threshold_type": "p-value",
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "spm_mat_file": null,
            "stat_image": null,
            "use_fwe_correction": true,
            "use_mcr": null,
            "use_topo_fdr": true,
            "use_v8struct": true
          },
          "module": "spm.model",
          "name": "Threshold",
          "outputs": {
            "activation_forced": null,
            "cluster_forming_thr": null,
            "n_clusters": null,
            "pre_topo_fdr_map": null,
            "pre_topo_n_clusters": null,
            "thresholded_map": null
          },
          "type": null
        },
        "spm.model.ThresholdStatistics": {
          "inputs": {
            "contrast_index": null,
            "extent_threshold": 0,
            "height_threshold": null,
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "spm_mat_file": null,
            "stat_image": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.model",
          "name": "ThresholdStatistics",
          "outputs": {
            "clusterwise_P_FDR": null,
            "clusterwise_P_RF": null,
            "voxelwise_P_Bonf": null,
            "voxelwise_P_FDR": null,
            "voxelwise_P_RF": null,
            "voxelwise_P_uncor": null
          },
          "type": null
        },
        "spm.model.TwoSampleTTestDesign": {
          "inputs": {
            "covariates": null,
            "dependent": null,
            "explicit_mask_file": null,
            "global_calc_mean": null,
            "global_calc_omit": null,
            "global_calc_values": null,
            "global_normalization": null,
            "group1_files": null,
            "group2_files": null,
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "no_grand_mean_scaling": null,
            "paths": null,
            "spm_mat_dir": null,
            "threshold_mask_absolute": null,
            "threshold_mask_none": null,
            "threshold_mask_relative": null,
            "unequal_variance": null,
            "use_implicit_threshold": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.model",
          "name": "TwoSampleTTestDesign",
          "outputs": {
            "spm_mat_file": null
          },
          "type": null
        },
        "spm.preprocess.ApplyDeformations": {
          "inputs": {
            "deformation_field": null,
            "ignore_exception": false,
            "in_files": null,
            "interp": null,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "reference_volume": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.preprocess",
          "name": "ApplyDeformations",
          "outputs": {
            "out_files": null
          },
          "type": null
        },
        "spm.preprocess.Coregister": {
          "inputs": {
            "apply_to_files": null,
            "cost_function": null,
            "fwhm": null,
            "ignore_exception": false,
            "jobtype": "estwrite",
            "matlab_cmd": null,
            "mfile": true,
            "out_prefix": "r",
            "paths": null,
            "separation": null,
            "source": null,
            "target": null,
            "tolerance": null,
            "use_mcr": null,
            "use_v8struct": true,
            "write_interp": null,
            "write_mask": null,
            "write_wrap": null
          },
          "module": "spm.preprocess",
          "name": "Coregister",
          "outputs": {
            "coregistered_files": null,
            "coregistered_source": null
          },
          "type": null
        },
        "spm.preprocess.CreateWarped": {
          "inputs": {
            "flowfield_files": null,
            "ignore_exception": false,
            "image_files": null,
            "interp": null,
            "iterations": null,
            "matlab_cmd": null,
            "mfile": true,
            "modulate": null,
            "paths": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.preprocess",
          "name": "CreateWarped",
          "outputs": {
            "warped_files": null
          },
          "type": null
        },
        "spm.preprocess.DARTEL": {
          "inputs": {
            "ignore_exception": false,
            "image_files": null,
            "iteration_parameters": null,
            "matlab_cmd": null,
            "mfile": true,
            "optimization_parameters": null,
            "paths": null,
            "regularization_form": null,
            "template_prefix": "Template",
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.preprocess",
          "name": "DARTEL",
          "outputs": {
            "dartel_flow_fields": null,
            "final_template_file": null,
            "template_files": null
          },
          "type": null
        },
        "spm.preprocess.DARTELNorm2MNI": {
          "inputs": {
            "apply_to_files": null,
            "bounding_box": null,
            "flowfield_files": null,
            "fwhm": null,
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "modulate": null,
            "paths": null,
            "template_file": null,
            "use_mcr": null,
            "use_v8struct": true,
            "voxel_size": null
          },
          "module": "spm.preprocess",
          "name": "DARTELNorm2MNI",
          "outputs": {
            "normalization_parameter_file": null,
            "normalized_files": null
          },
          "type": null
        },
        "spm.preprocess.NewSegment": {
          "inputs": {
            "affine_regularization": null,
            "channel_files": null,
            "channel_info": null,
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "sampling_distance": null,
            "tissues": null,
            "use_mcr": null,
            "use_v8struct": true,
            "warping_regularization": null,
            "write_deformation_fields": null
          },
          "module": "spm.preprocess",
          "name": "NewSegment",
          "outputs": {
            "bias_corrected_images": null,
            "bias_field_images": null,
            "dartel_input_images": null,
            "forward_deformation_field": null,
            "inverse_deformation_field": null,
            "modulated_class_images": null,
            "native_class_images": null,
            "normalized_class_images": null,
            "transformation_mat": null
          },
          "type": null
        },
        "spm.preprocess.Normalize": {
          "inputs": {
            "DCT_period_cutoff": null,
            "affine_regularization_type": null,
            "apply_to_files": null,
            "ignore_exception": false,
            "jobtype": "estwrite",
            "matlab_cmd": null,
            "mfile": true,
            "nonlinear_iterations": null,
            "nonlinear_regularization": null,
            "out_prefix": "w",
            "parameter_file": null,
            "paths": null,
            "source": null,
            "source_image_smoothing": null,
            "source_weight": null,
            "template": null,
            "template_image_smoothing": null,
            "template_weight": null,
            "use_mcr": null,
            "use_v8struct": true,
            "write_bounding_box": null,
            "write_interp": null,
            "write_preserve": null,
            "write_voxel_sizes": null,
            "write_wrap": null
          },
          "module": "spm.preprocess",
          "name": "Normalize",
          "outputs": {
            "normalization_parameters": null,
            "normalized_files": null,
            "normalized_source": null
          },
          "type": null
        },
        "spm.preprocess.Normalize12": {
          "inputs": {
            "affine_regularization_type": null,
            "apply_to_files": null,
            "bias_fwhm": null,
            "bias_regularization": null,
            "deformation_file": null,
            "ignore_exception": false,
            "image_to_align": null,
            "jobtype": "estwrite",
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "sampling_distance": null,
            "smoothness": null,
            "tpm": null,
            "use_mcr": null,
            "use_v8struct": true,
            "warping_regularization": null,
            "write_bounding_box": null,
            "write_interp": null,
            "write_voxel_sizes": null
          },
          "module": "spm.preprocess",
          "name": "Normalize12",
          "outputs": {
            "deformation_field": null,
            "normalized_files": null,
            "normalized_image": null
          },
          "type": null
        },
        "spm.preprocess.Realign": {
          "inputs": {
            "fwhm": null,
            "ignore_exception": false,
            "in_files": null,
            "interp": null,
            "jobtype": "estwrite",
            "matlab_cmd": null,
            "mfile": true,
            "out_prefix": "r",
            "paths": null,
            "quality": null,
            "register_to_mean": null,
            "separation": null,
            "use_mcr": null,
            "use_v8struct": true,
            "weight_img": null,
            "wrap": null,
            "write_interp": null,
            "write_mask": null,
            "write_which": [
              2,
              1
            ],
            "write_wrap": null
          },
          "module": "spm.preprocess",
          "name": "Realign",
          "outputs": {
            "mean_image": null,
            "modified_in_files": null,
            "realigned_files": null,
            "realignment_parameters": null
          },
          "type": null
        },
        "spm.preprocess.Segment": {
          "inputs": {
            "affine_regularization": null,
            "bias_fwhm": null,
            "bias_regularization": null,
            "clean_masks": null,
            "csf_output_type": null,
            "data": null,
            "gaussians_per_class": null,
            "gm_output_type": null,
            "ignore_exception": false,
            "mask_image": null,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "sampling_distance": null,
            "save_bias_corrected": null,
            "tissue_prob_maps": null,
            "use_mcr": null,
            "use_v8struct": true,
            "warp_frequency_cutoff": null,
            "warping_regularization": null,
            "wm_output_type": null
          },
          "module": "spm.preprocess",
          "name": "Segment",
          "outputs": {
            "bias_corrected_image": null,
            "inverse_transformation_mat": null,
            "modulated_csf_image": null,
            "modulated_gm_image": null,
            "modulated_input_image": null,
            "modulated_wm_image": null,
            "native_csf_image": null,
            "native_gm_image": null,
            "native_wm_image": null,
            "normalized_csf_image": null,
            "normalized_gm_image": null,
            "normalized_wm_image": null,
            "transformation_mat": null
          },
          "type": null
        },
        "spm.preprocess.SliceTiming": {
          "inputs": {
            "ignore_exception": false,
            "in_files": null,
            "matlab_cmd": null,
            "mfile": true,
            "num_slices": null,
            "out_prefix": "a",
            "paths": null,
            "ref_slice": null,
            "slice_order": null,
            "time_acquisition": null,
            "time_repetition": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.preprocess",
          "name": "SliceTiming",
          "outputs": {
            "timecorrected_files": null
          },
          "type": null
        },
        "spm.preprocess.Smooth": {
          "inputs": {
            "data_type": null,
            "fwhm": null,
            "ignore_exception": false,
            "implicit_masking": null,
            "in_files": null,
            "matlab_cmd": null,
            "mfile": true,
            "out_prefix": "s",
            "paths": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.preprocess",
          "name": "Smooth",
          "outputs": {
            "smoothed_files": null
          },
          "type": null
        },
        "spm.preprocess.VBMSegment": {
          "inputs": {
            "bias_corrected_affine": false,
            "bias_corrected_native": false,
            "bias_corrected_normalized": true,
            "bias_fwhm": 60,
            "bias_regularization": 0.0001,
            "cleanup_partitions": 1,
            "csf_dartel": 0,
            "csf_modulated_normalized": 2,
            "csf_native": false,
            "csf_normalized": false,
            "dartel_template": null,
            "deformation_field": [
              0,
              0
            ],
            "display_results": true,
            "gaussians_per_class": [
              2,
              2,
              2,
              3,
              4,
              2
            ],
            "gm_dartel": 0,
            "gm_modulated_normalized": 2,
            "gm_native": false,
            "gm_normalized": false,
            "ignore_exception": false,
            "in_files": null,
            "jacobian_determinant": false,
            "matlab_cmd": null,
            "mfile": true,
            "mrf_weighting": 0.15,
            "paths": null,
            "pve_label_dartel": 0,
            "pve_label_native": false,
            "pve_label_normalized": false,
            "sampling_distance": 3,
            "spatial_normalization": "high",
            "tissues": null,
            "use_mcr": null,
            "use_sanlm_denoising_filter": 2,
            "use_v8struct": true,
            "warping_regularization": 4,
            "wm_dartel": 0,
            "wm_modulated_normalized": 2,
            "wm_native": false,
            "wm_normalized": false
          },
          "module": "spm.preprocess",
          "name": "VBMSegment",
          "outputs": {
            "bias_corrected_images": null,
            "dartel_input_images": null,
            "forward_deformation_field": null,
            "inverse_deformation_field": null,
            "jacobian_determinant_images": null,
            "modulated_class_images": null,
            "native_class_images": null,
            "normalized_bias_corrected_images": null,
            "normalized_class_images": null,
            "pve_label_native_images": null,
            "pve_label_normalized_images": null,
            "pve_label_registered_images": null,
            "transformation_mat": null
          },
          "type": null
        },
        "spm.utils.Analyze2nii": {
          "inputs": {
            "analyze_file": null,
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.utils",
          "name": "Analyze2nii",
          "outputs": {
            "ignore_exception": false,
            "matlab_cmd": null,
            "mfile": true,
            "nifti_file": null,
            "paths": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "type": null
        },
        "spm.utils.ApplyInverseDeformation": {
          "inputs": {
            "bounding_box": null,
            "deformation": null,
            "deformation_field": null,
            "ignore_exception": false,
            "in_files": null,
            "interpolation": null,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "target": null,
            "use_mcr": null,
            "use_v8struct": true,
            "voxel_sizes": null
          },
          "module": "spm.utils",
          "name": "ApplyInverseDeformation",
          "outputs": {
            "out_files": null
          },
          "type": null
        },
        "spm.utils.ApplyTransform": {
          "inputs": {
            "ignore_exception": false,
            "in_file": null,
            "mat": null,
            "matlab_cmd": null,
            "mfile": true,
            "out_file": null,
            "paths": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.utils",
          "name": "ApplyTransform",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "spm.utils.CalcCoregAffine": {
          "inputs": {
            "ignore_exception": false,
            "invmat": null,
            "mat": null,
            "matlab_cmd": null,
            "mfile": true,
            "moving": null,
            "paths": null,
            "target": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.utils",
          "name": "CalcCoregAffine",
          "outputs": {
            "invmat": null,
            "mat": null
          },
          "type": null
        },
        "spm.utils.DicomImport": {
          "inputs": {
            "format": "nii",
            "icedims": false,
            "ignore_exception": false,
            "in_files": null,
            "matlab_cmd": null,
            "mfile": true,
            "output_dir": "./converted_dicom",
            "output_dir_struct": "flat",
            "paths": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.utils",
          "name": "DicomImport",
          "outputs": {
            "out_files": null
          },
          "type": null
        },
        "spm.utils.Reslice": {
          "inputs": {
            "ignore_exception": false,
            "in_file": null,
            "interp": 0,
            "matlab_cmd": null,
            "mfile": true,
            "out_file": null,
            "paths": null,
            "space_defining": null,
            "use_mcr": null,
            "use_v8struct": true
          },
          "module": "spm.utils",
          "name": "Reslice",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "spm.utils.ResliceToReference": {
          "inputs": {
            "bounding_box": null,
            "ignore_exception": false,
            "in_files": null,
            "interpolation": null,
            "matlab_cmd": null,
            "mfile": true,
            "paths": null,
            "target": null,
            "use_mcr": null,
            "use_v8struct": true,
            "voxel_sizes": null
          },
          "module": "spm.utils",
          "name": "ResliceToReference",
          "outputs": {
            "out_files": null
          },
          "type": null
        },
        "utility.AssertEqual": {
          "inputs": {
            "ignore_exception": false,
            "volume1": null,
            "volume2": null
          },
          "module": "utility",
          "name": "AssertEqual",
          "outputs": {},
          "type": null
        },
        "utility.CSVReader": {
          "inputs": {
            "header": false,
            "in_file": null
          },
          "module": "utility",
          "name": "CSVReader",
          "outputs": {},
          "type": null
        },
        "utility.Function": {
          "inputs": {
            "function_str": null,
            "ignore_exception": false
          },
          "module": "utility",
          "name": "Function",
          "outputs": {},
          "type": null
        },
        "utility.IdentityInterface": {
          "inputs": {},
          "module": "utility",
          "name": "IdentityInterface",
          "outputs": {},
          "type": null
        },
        "utility.Merge": {
          "inputs": {
            "axis": "vstack",
            "ignore_exception": false,
            "no_flatten": false
          },
          "module": "utility",
          "name": "Merge",
          "outputs": {
            "out": null
          },
          "type": null
        },
        "utility.Rename": {
          "inputs": {
            "format_string": null,
            "in_file": null,
            "keep_ext": null,
            "parse_string": null,
            "use_fullpath": false
          },
          "module": "utility",
          "name": "Rename",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "utility.Select": {
          "inputs": {
            "ignore_exception": false,
            "index": null,
            "inlist": null
          },
          "module": "utility",
          "name": "Select",
          "outputs": {
            "out": null
          },
          "type": null
        },
        "utility.Split": {
          "inputs": {
            "ignore_exception": false,
            "inlist": null,
            "splits": null,
            "squeeze": false
          },
          "module": "utility",
          "name": "Split",
          "outputs": {},
          "type": null
        },
        "vista.vista.Vnifti2Image": {
          "inputs": {
            "args": null,
            "attributes": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "terminal_output": null
          },
          "module": "vista.vista",
          "name": "Vnifti2Image",
          "outputs": {
            "out_file": null
          },
          "type": null
        },
        "vista.vista.VtoMat": {
          "inputs": {
            "args": null,
            "environ": {},
            "ignore_exception": false,
            "in_file": null,
            "out_file": null,
            "terminal_output": null
          },
          "module": "vista.vista",
          "name": "VtoMat",
          "outputs": {
            "out_file": null
          },
          "type": null
        }
      },
      "modules": {
        "": {
          "interfaces": [],
          "name": "",
          "submodules": [
            "io",
            "base",
            "utility",
            "afni",
            "ants",
            "camino",
            "camino2trackvis",
            "cmtk",
            "diffusion_toolkit",
            "dipy",
            "elastix",
            "freesurfer",
            "fsl",
            "mipav",
            "mne",
            "mrtrix",
            "nipy",
            "nitime",
            "semtools",
            "slicer",
            "spm",
            "matlab",
            "vista"
          ],
          "type": null
        },
        "afni": {
          "interfaces": [],
          "name": "afni",
          "submodules": [
            "afni.preprocess",
            "afni.base",
            "afni.svm"
          ],
          "type": null
        },
        "afni.base": {
          "interfaces": [
            "afni.base.AFNICommand"
          ],
          "name": "afni.base",
          "submodules": [],
          "type": null
        },
        "afni.preprocess": {
          "interfaces": [
            "afni.preprocess.AFNItoNIFTI",
            "afni.preprocess.Allineate",
            "afni.preprocess.AutoTcorrelate",
            "afni.preprocess.Autobox",
            "afni.preprocess.Automask",
            "afni.preprocess.Bandpass",
            "afni.preprocess.BlurInMask",
            "afni.preprocess.BrickStat",
            "afni.preprocess.Calc",
            "afni.preprocess.Copy",
            "afni.preprocess.Despike",
            "afni.preprocess.Detrend",
            "afni.preprocess.Eval",
            "afni.preprocess.Fim",
            "afni.preprocess.Fourier",
            "afni.preprocess.Maskave",
            "afni.preprocess.Means",
            "afni.preprocess.Merge",
            "afni.preprocess.ROIStats",
            "afni.preprocess.Refit",
            "afni.preprocess.Resample",
            "afni.preprocess.Retroicor",
            "afni.preprocess.SkullStrip",
            "afni.preprocess.TCat",
            "afni.preprocess.TCorr1D",
            "afni.preprocess.TCorrMap",
            "afni.preprocess.TCorrelate",
            "afni.preprocess.TShift",
            "afni.preprocess.TStat",
            "afni.preprocess.To3D",
            "afni.preprocess.Volreg",
            "afni.preprocess.Warp",
            "afni.preprocess.ZCutUp"
          ],
          "name": "afni.preprocess",
          "submodules": [],
          "type": null
        },
        "afni.svm": {
          "interfaces": [
            "afni.svm.SVMTest",
            "afni.svm.SVMTrain"
          ],
          "name": "afni.svm",
          "submodules": [],
          "type": null
        },
        "ants": {
          "interfaces": [],
          "name": "ants",
          "submodules": [
            "ants.registration",
            "ants.base",
            "ants.resampling",
            "ants.segmentation",
            "ants.utils",
            "ants.visualization"
          ],
          "type": null
        },
        "ants.base": {
          "interfaces": [
            "ants.base.ANTSCommand"
          ],
          "name": "ants.base",
          "submodules": [],
          "type": null
        },
        "ants.registration": {
          "interfaces": [
            "ants.registration.ANTS",
            "ants.registration.Registration"
          ],
          "name": "ants.registration",
          "submodules": [],
          "type": null
        },
        "ants.resampling": {
          "interfaces": [
            "ants.resampling.ApplyTransforms",
            "ants.resampling.ApplyTransformsToPoints",
            "ants.resampling.WarpImageMultiTransform",
            "ants.resampling.WarpTimeSeriesImageMultiTransform"
          ],
          "name": "ants.resampling",
          "submodules": [],
          "type": null
        },
        "ants.segmentation": {
          "interfaces": [
            "ants.segmentation.Atropos",
            "ants.segmentation.JointFusion",
            "ants.segmentation.LaplacianThickness",
            "ants.segmentation.N4BiasFieldCorrection",
            "ants.segmentation.antsCorticalThickness"
          ],
          "name": "ants.segmentation",
          "submodules": [],
          "type": null
        },
        "ants.utils": {
          "interfaces": [
            "ants.utils.AverageAffineTransform",
            "ants.utils.AverageImages",
            "ants.utils.JacobianDeterminant",
            "ants.utils.MultiplyImages"
          ],
          "name": "ants.utils",
          "submodules": [],
          "type": null
        },
        "ants.visualization": {
          "interfaces": [
            "ants.visualization.ConvertScalarImageToRGB",
            "ants.visualization.CreateTiledMosaic"
          ],
          "name": "ants.visualization",
          "submodules": [],
          "type": null
        },
        "base": {
          "interfaces": [
            "base.BaseInterface",
            "base.CommandLine",
            "base.Interface",
            "base.MpiCommandLine",
            "base.SEMLikeCommandLine",
            "base.StdOutCommandLine"
          ],
          "name": "base",
          "submodules": [],
          "type": null
        },
        "camino": {
          "interfaces": [],
          "name": "camino",
          "submodules": [
            "camino.convert",
            "camino.dti",
            "camino.connectivity",
            "camino.utils",
            "camino.odf",
            "camino.calib"
          ],
          "type": null
        },
        "camino.calib": {
          "interfaces": [
            "camino.calib.SFLUTGen",
            "camino.calib.SFPICOCalibData"
          ],
          "name": "camino.calib",
          "submodules": [],
          "type": null
        },
        "camino.connectivity": {
          "interfaces": [
            "camino.connectivity.Conmat"
          ],
          "name": "camino.connectivity",
          "submodules": [],
          "type": null
        },
        "camino.convert": {
          "interfaces": [
            "camino.convert.AnalyzeHeader",
            "camino.convert.DT2NIfTI",
            "camino.convert.FSL2Scheme",
            "camino.convert.Image2Voxel",
            "camino.convert.NIfTIDT2Camino",
            "camino.convert.ProcStreamlines",
            "camino.convert.Shredder",
            "camino.convert.TractShredder",
            "camino.convert.VtkStreamlines"
          ],
          "name": "camino.convert",
          "submodules": [],
          "type": null
        },
        "camino.dti": {
          "interfaces": [
            "camino.dti.ComputeEigensystem",
            "camino.dti.ComputeFractionalAnisotropy",
            "camino.dti.ComputeMeanDiffusivity",
            "camino.dti.ComputeTensorTrace",
            "camino.dti.DTIFit",
            "camino.dti.DTLUTGen",
            "camino.dti.DTMetric",
            "camino.dti.ModelFit",
            "camino.dti.PicoPDFs",
            "camino.dti.Track",
            "camino.dti.TrackBallStick",
            "camino.dti.TrackBayesDirac",
            "camino.dti.TrackBedpostxDeter",
            "camino.dti.TrackBedpostxProba",
            "camino.dti.TrackBootstrap",
            "camino.dti.TrackDT",
            "camino.dti.TrackPICo"
          ],
          "name": "camino.dti",
          "submodules": [],
          "type": null
        },
        "camino.odf": {
          "interfaces": [
            "camino.odf.LinRecon",
            "camino.odf.MESD",
            "camino.odf.QBallMX",
            "camino.odf.SFPeaks"
          ],
          "name": "camino.odf",
          "submodules": [],
          "type": null
        },
        "camino.utils": {
          "interfaces": [
            "camino.utils.ImageStats"
          ],
          "name": "camino.utils",
          "submodules": [],
          "type": null
        },
        "camino2trackvis": {
          "interfaces": [],
          "name": "camino2trackvis",
          "submodules": [
            "camino2trackvis.convert"
          ],
          "type": null
        },
        "camino2trackvis.convert": {
          "interfaces": [
            "camino2trackvis.convert.Camino2Trackvis",
            "camino2trackvis.convert.Trackvis2Camino"
          ],
          "name": "camino2trackvis.convert",
          "submodules": [],
          "type": null
        },
        "cmtk": {
          "interfaces": [],
          "name": "cmtk",
          "submodules": [
            "cmtk.nx",
            "cmtk.convert",
            "cmtk.cmtk",
            "cmtk.nbs",
            "cmtk.parcellation"
          ],
          "type": null
        },
        "cmtk.cmtk": {
          "interfaces": [
            "cmtk.cmtk.CreateMatrix",
            "cmtk.cmtk.CreateNodes",
            "cmtk.cmtk.ROIGen"
          ],
          "name": "cmtk.cmtk",
          "submodules": [],
          "type": null
        },
        "cmtk.convert": {
          "interfaces": [
            "cmtk.convert.CFFConverter",
            "cmtk.convert.MergeCNetworks"
          ],
          "name": "cmtk.convert",
          "submodules": [],
          "type": null
        },
        "cmtk.nbs": {
          "interfaces": [
            "cmtk.nbs.NetworkBasedStatistic"
          ],
          "name": "cmtk.nbs",
          "submodules": [],
          "type": null
        },
        "cmtk.nx": {
          "interfaces": [
            "cmtk.nx.AverageNetworks",
            "cmtk.nx.NetworkXMetrics"
          ],
          "name": "cmtk.nx",
          "submodules": [],
          "type": null
        },
        "cmtk.parcellation": {
          "interfaces": [
            "cmtk.parcellation.Parcellate"
          ],
          "name": "cmtk.parcellation",
          "submodules": [],
          "type": null
        },
        "diffusion_toolkit": {
          "interfaces": [],
          "name": "diffusion_toolkit",
          "submodules": [
            "diffusion_toolkit.dti",
            "diffusion_toolkit.odf",
            "diffusion_toolkit.postproc"
          ],
          "type": null
        },
        "diffusion_toolkit.dti": {
          "interfaces": [
            "diffusion_toolkit.dti.DTIRecon",
            "diffusion_toolkit.dti.DTITracker"
          ],
          "name": "diffusion_toolkit.dti",
          "submodules": [],
          "type": null
        },
        "diffusion_toolkit.odf": {
          "interfaces": [
            "diffusion_toolkit.odf.HARDIMat",
            "diffusion_toolkit.odf.ODFRecon",
            "diffusion_toolkit.odf.ODFTracker"
          ],
          "name": "diffusion_toolkit.odf",
          "submodules": [],
          "type": null
        },
        "diffusion_toolkit.postproc": {
          "interfaces": [
            "diffusion_toolkit.postproc.SplineFilter",
            "diffusion_toolkit.postproc.TrackMerge"
          ],
          "name": "diffusion_toolkit.postproc",
          "submodules": [],
          "type": null
        },
        "dipy": {
          "interfaces": [],
          "name": "dipy",
          "submodules": [
            "dipy.tensors",
            "dipy.preprocess",
            "dipy.simulate",
            "dipy.tracks"
          ],
          "type": null
        },
        "dipy.preprocess": {
          "interfaces": [
            "dipy.preprocess.Denoise",
            "dipy.preprocess.Resample"
          ],
          "name": "dipy.preprocess",
          "submodules": [],
          "type": null
        },
        "dipy.simulate": {
          "interfaces": [
            "dipy.simulate.SimulateMultiTensor"
          ],
          "name": "dipy.simulate",
          "submodules": [],
          "type": null
        },
        "dipy.tensors": {
          "interfaces": [
            "dipy.tensors.DTI",
            "dipy.tensors.TensorMode"
          ],
          "name": "dipy.tensors",
          "submodules": [],
          "type": null
        },
        "dipy.tracks": {
          "interfaces": [
            "dipy.tracks.TrackDensityMap"
          ],
          "name": "dipy.tracks",
          "submodules": [],
          "type": null
        },
        "elastix": {
          "interfaces": [],
          "name": "elastix",
          "submodules": [
            "elastix.registration",
            "elastix.utils"
          ],
          "type": null
        },
        "elastix.registration": {
          "interfaces": [
            "elastix.registration.AnalyzeWarp",
            "elastix.registration.ApplyWarp",
            "elastix.registration.PointsWarp",
            "elastix.registration.Registration"
          ],
          "name": "elastix.registration",
          "submodules": [],
          "type": null
        },
        "elastix.utils": {
          "interfaces": [
            "elastix.utils.EditTransform"
          ],
          "name": "elastix.utils",
          "submodules": [],
          "type": null
        },
        "freesurfer": {
          "interfaces": [],
          "name": "freesurfer",
          "submodules": [
            "freesurfer.utils",
            "freesurfer.base",
            "freesurfer.preprocess",
            "freesurfer.model"
          ],
          "type": null
        },
        "freesurfer.base": {
          "interfaces": [
            "freesurfer.base.FSCommand"
          ],
          "name": "freesurfer.base",
          "submodules": [],
          "type": null
        },
        "freesurfer.model": {
          "interfaces": [
            "freesurfer.model.Binarize",
            "freesurfer.model.Concatenate",
            "freesurfer.model.GLMFit",
            "freesurfer.model.Label2Vol",
            "freesurfer.model.MRISPreproc",
            "freesurfer.model.MS_LDA",
            "freesurfer.model.OneSampleTTest",
            "freesurfer.model.SegStats"
          ],
          "name": "freesurfer.model",
          "submodules": [],
          "type": null
        },
        "freesurfer.preprocess": {
          "interfaces": [
            "freesurfer.preprocess.ApplyVolTransform",
            "freesurfer.preprocess.BBRegister",
            "freesurfer.preprocess.DICOMConvert",
            "freesurfer.preprocess.FitMSParams",
            "freesurfer.preprocess.MRIConvert",
            "freesurfer.preprocess.ParseDICOMDir",
            "freesurfer.preprocess.ReconAll",
            "freesurfer.preprocess.Resample",
            "freesurfer.preprocess.RobustRegister",
            "freesurfer.preprocess.Smooth",
            "freesurfer.preprocess.SynthesizeFLASH",
            "freesurfer.preprocess.UnpackSDICOMDir"
          ],
          "name": "freesurfer.preprocess",
          "submodules": [],
          "type": null
        },
        "freesurfer.utils": {
          "interfaces": [
            "freesurfer.utils.ApplyMask",
            "freesurfer.utils.ExtractMainComponent",
            "freesurfer.utils.ImageInfo",
            "freesurfer.utils.MRIMarchingCubes",
            "freesurfer.utils.MRIPretess",
            "freesurfer.utils.MRITessellate",
            "freesurfer.utils.MRIsConvert",
            "freesurfer.utils.MakeAverageSubject",
            "freesurfer.utils.SampleToSurface",
            "freesurfer.utils.SmoothTessellation",
            "freesurfer.utils.Surface2VolTransform",
            "freesurfer.utils.SurfaceSmooth",
            "freesurfer.utils.SurfaceSnapshots",
            "freesurfer.utils.SurfaceTransform",
            "freesurfer.utils.Tkregister2"
          ],
          "name": "freesurfer.utils",
          "submodules": [],
          "type": null
        },
        "fsl": {
          "interfaces": [],
          "name": "fsl",
          "submodules": [
            "fsl.maths",
            "fsl.base",
            "fsl.epi",
            "fsl.preprocess",
            "fsl.dti",
            "fsl.model",
            "fsl.utils"
          ],
          "type": null
        },
        "fsl.base": {
          "interfaces": [
            "fsl.base.FSLCommand"
          ],
          "name": "fsl.base",
          "submodules": [],
          "type": null
        },
        "fsl.dti": {
          "interfaces": [
            "fsl.dti.BEDPOSTX",
            "fsl.dti.BEDPOSTX4",
            "fsl.dti.BEDPOSTX5",
            "fsl.dti.XFibres4",
            "fsl.dti.DTIFit",
            "fsl.dti.DistanceMap",
            "fsl.dti.FSLXCommand",
            "fsl.dti.FindTheBiggest",
            "fsl.dti.MakeDyadicVectors",
            "fsl.dti.ProbTrackX",
            "fsl.dti.ProbTrackX2",
            "fsl.dti.ProjThresh",
            "fsl.dti.TractSkeleton",
            "fsl.dti.VecReg",
            "fsl.dti.XFibres",
            "fsl.dti.XFibres5"
          ],
          "name": "fsl.dti",
          "submodules": [],
          "type": null
        },
        "fsl.epi": {
          "interfaces": [
            "fsl.epi.ApplyTOPUP",
            "fsl.epi.EPIDeWarp",
            "fsl.epi.Eddy",
            "fsl.epi.EddyCorrect",
            "fsl.epi.EpiReg",
            "fsl.epi.PrepareFieldmap",
            "fsl.epi.SigLoss",
            "fsl.epi.TOPUP"
          ],
          "name": "fsl.epi",
          "submodules": [],
          "type": null
        },
        "fsl.maths": {
          "interfaces": [
            "fsl.maths.ApplyMask",
            "fsl.maths.BinaryMaths",
            "fsl.maths.ChangeDataType",
            "fsl.maths.DilateImage",
            "fsl.maths.ErodeImage",
            "fsl.maths.IsotropicSmooth",
            "fsl.maths.MathsCommand",
            "fsl.maths.MaxImage",
            "fsl.maths.MeanImage",
            "fsl.maths.MultiImageMaths",
            "fsl.maths.SpatialFilter",
            "fsl.maths.TemporalFilter",
            "fsl.maths.Threshold",
            "fsl.maths.UnaryMaths"
          ],
          "name": "fsl.maths",
          "submodules": [],
          "type": null
        },
        "fsl.model": {
          "interfaces": [
            "fsl.model.Cluster",
            "fsl.model.ContrastMgr",
            "fsl.model.FEAT",
            "fsl.model.FEATModel",
            "fsl.model.FEATRegister",
            "fsl.model.FILMGLS",
            "fsl.model.FLAMEO",
            "fsl.model.GLM",
            "fsl.model.L2Model",
            "fsl.model.Level1Design",
            "fsl.model.MELODIC",
            "fsl.model.MultipleRegressDesign",
            "fsl.model.Randomise",
            "fsl.model.SMM",
            "fsl.model.SmoothEstimate"
          ],
          "name": "fsl.model",
          "submodules": [],
          "type": null
        },
        "fsl.preprocess": {
          "interfaces": [
            "fsl.preprocess.ApplyWarp",
            "fsl.preprocess.ApplyXfm",
            "fsl.preprocess.BET",
            "fsl.preprocess.FAST",
            "fsl.preprocess.FIRST",
            "fsl.preprocess.FLIRT",
            "fsl.preprocess.FNIRT",
            "fsl.preprocess.FUGUE",
            "fsl.preprocess.MCFLIRT",
            "fsl.preprocess.PRELUDE",
            "fsl.preprocess.SUSAN",
            "fsl.preprocess.SliceTimer"
          ],
          "name": "fsl.preprocess",
          "submodules": [],
          "type": null
        },
        "fsl.utils": {
          "interfaces": [
            "fsl.utils.AvScale",
            "fsl.utils.Complex",
            "fsl.utils.ConvertWarp",
            "fsl.utils.ConvertXFM",
            "fsl.utils.CopyGeom",
            "fsl.utils.ExtractROI",
            "fsl.utils.FilterRegressor",
            "fsl.utils.ImageMaths",
            "fsl.utils.ImageMeants",
            "fsl.utils.ImageStats",
            "fsl.utils.InvWarp",
            "fsl.utils.Merge",
            "fsl.utils.MotionOutliers",
            "fsl.utils.Overlay",
            "fsl.utils.PlotMotionParams",
            "fsl.utils.PlotTimeSeries",
            "fsl.utils.PowerSpectrum",
            "fsl.utils.Reorient2Std",
            "fsl.utils.RobustFOV",
            "fsl.utils.SigLoss",
            "fsl.utils.Slicer",
            "fsl.utils.Smooth",
            "fsl.utils.Split",
            "fsl.utils.SwapDimensions",
            "fsl.utils.WarpPoints",
            "fsl.utils.WarpPointsToStd",
            "fsl.utils.WarpUtils"
          ],
          "name": "fsl.utils",
          "submodules": [],
          "type": null
        },
        "io": {
          "interfaces": [
            "io.DataFinder",
            "io.DataGrabber",
            "io.DataSink",
            "io.FreeSurferSource",
            "io.IOBase",
            "io.JSONFileGrabber",
            "io.JSONFileSink",
            "io.MySQLSink",
            "io.SQLiteSink",
            "io.SSHDataGrabber",
            "io.SelectFiles",
            "io.XNATSink",
            "io.XNATSource"
          ],
          "name": "io",
          "submodules": [],
          "type": null
        },
        "matlab": {
          "interfaces": [
            "matlab.MatlabCommand"
          ],
          "name": "matlab",
          "submodules": [],
          "type": null
        },
        "mipav": {
          "interfaces": [],
          "name": "mipav",
          "submodules": [
            "mipav.developer"
          ],
          "type": null
        },
        "mipav.developer": {
          "interfaces": [
            "mipav.developer.JistBrainMgdmSegmentation",
            "mipav.developer.JistBrainMp2rageDuraEstimation",
            "mipav.developer.JistBrainMp2rageSkullStripping",
            "mipav.developer.JistBrainPartialVolumeFilter",
            "mipav.developer.JistCortexSurfaceMeshInflation",
            "mipav.developer.JistIntensityMp2rageMasking",
            "mipav.developer.JistLaminarProfileCalculator",
            "mipav.developer.JistLaminarProfileGeometry",
            "mipav.developer.JistLaminarProfileSampling",
            "mipav.developer.JistLaminarROIAveraging",
            "mipav.developer.JistLaminarVolumetricLayering",
            "mipav.developer.MedicAlgorithmImageCalculator",
            "mipav.developer.MedicAlgorithmLesionToads",
            "mipav.developer.MedicAlgorithmMipavReorient",
            "mipav.developer.MedicAlgorithmN3",
            "mipav.developer.MedicAlgorithmSPECTRE2010",
            "mipav.developer.MedicAlgorithmThresholdToBinaryMask",
            "mipav.developer.RandomVol"
          ],
          "name": "mipav.developer",
          "submodules": [],
          "type": null
        },
        "mne": {
          "interfaces": [],
          "name": "mne",
          "submodules": [
            "mne.base"
          ],
          "type": null
        },
        "mne.base": {
          "interfaces": [
            "mne.base.WatershedBEM"
          ],
          "name": "mne.base",
          "submodules": [],
          "type": null
        },
        "mrtrix": {
          "interfaces": [],
          "name": "mrtrix",
          "submodules": [
            "mrtrix.tensors",
            "mrtrix.preprocess",
            "mrtrix.tracking",
            "mrtrix.convert"
          ],
          "type": null
        },
        "mrtrix.convert": {
          "interfaces": [
            "mrtrix.convert.MRTrix2TrackVis"
          ],
          "name": "mrtrix.convert",
          "submodules": [],
          "type": null
        },
        "mrtrix.preprocess": {
          "interfaces": [
            "mrtrix.preprocess.DWI2Tensor",
            "mrtrix.preprocess.Erode",
            "mrtrix.preprocess.GenerateWhiteMatterMask",
            "mrtrix.preprocess.MRConvert",
            "mrtrix.preprocess.MRMultiply",
            "mrtrix.preprocess.MRTransform",
            "mrtrix.preprocess.MRTrixInfo",
            "mrtrix.preprocess.MRTrixViewer",
            "mrtrix.preprocess.MedianFilter3D",
            "mrtrix.preprocess.Tensor2ApparentDiffusion",
            "mrtrix.preprocess.Tensor2FractionalAnisotropy",
            "mrtrix.preprocess.Tensor2Vector",
            "mrtrix.preprocess.Threshold"
          ],
          "name": "mrtrix.preprocess",
          "submodules": [],
          "type": null
        },
        "mrtrix.tensors": {
          "interfaces": [
            "mrtrix.tensors.ConstrainedSphericalDeconvolution",
            "mrtrix.tensors.DWI2SphericalHarmonicsImage",
            "mrtrix.tensors.Directions2Amplitude",
            "mrtrix.tensors.EstimateResponseForSH",
            "mrtrix.tensors.FSL2MRTrix",
            "mrtrix.tensors.FindShPeaks",
            "mrtrix.tensors.GenerateDirections"
          ],
          "name": "mrtrix.tensors",
          "submodules": [],
          "type": null
        },
        "mrtrix.tracking": {
          "interfaces": [
            "mrtrix.tracking.DiffusionTensorStreamlineTrack",
            "mrtrix.tracking.FilterTracks",
            "mrtrix.tracking.ProbabilisticSphericallyDeconvolutedStreamlineTrack",
            "mrtrix.tracking.SphericallyDeconvolutedStreamlineTrack",
            "mrtrix.tracking.StreamlineTrack",
            "mrtrix.tracking.Tracks2Prob"
          ],
          "name": "mrtrix.tracking",
          "submodules": [],
          "type": null
        },
        "nipy": {
          "interfaces": [],
          "name": "nipy",
          "submodules": [
            "nipy.preprocess",
            "nipy.model",
            "nipy.utils"
          ],
          "type": null
        },
        "nipy.model": {
          "interfaces": [
            "nipy.model.EstimateContrast",
            "nipy.model.FitGLM"
          ],
          "name": "nipy.model",
          "submodules": [],
          "type": null
        },
        "nipy.preprocess": {
          "interfaces": [
            "nipy.preprocess.ComputeMask",
            "nipy.preprocess.FmriRealign4d",
            "nipy.preprocess.SpaceTimeRealigner",
            "nipy.preprocess.Trim"
          ],
          "name": "nipy.preprocess",
          "submodules": [],
          "type": null
        },
        "nipy.utils": {
          "interfaces": [
            "nipy.utils.Similarity"
          ],
          "name": "nipy.utils",
          "submodules": [],
          "type": null
        },
        "nitime": {
          "interfaces": [],
          "name": "nitime",
          "submodules": [
            "nitime.analysis"
          ],
          "type": null
        },
        "nitime.analysis": {
          "interfaces": [
            "nitime.analysis.CoherenceAnalyzer"
          ],
          "name": "nitime.analysis",
          "submodules": [],
          "type": null
        },
        "semtools": {
          "interfaces": [],
          "name": "semtools",
          "submodules": [
            "semtools.segmentation",
            "semtools.utilities",
            "semtools.registration",
            "semtools.brains",
            "semtools.filtering",
            "semtools.converters",
            "semtools.diffusion",
            "semtools.testing",
            "semtools.featurecreator",
            "semtools.legacy"
          ],
          "type": null
        },
        "semtools.brains": {
          "interfaces": [],
          "name": "semtools.brains",
          "submodules": [
            "semtools.brains.segmentation",
            "semtools.brains.utilities",
            "semtools.brains.classify"
          ],
          "type": null
        },
        "semtools.brains.classify": {
          "interfaces": [
            "semtools.brains.classify.BRAINSPosteriorToContinuousClass"
          ],
          "name": "semtools.brains.classify",
          "submodules": [],
          "type": null
        },
        "semtools.brains.segmentation": {
          "interfaces": [
            "semtools.brains.segmentation.BRAINSTalairach",
            "semtools.brains.segmentation.BRAINSTalairachMask",
            "semtools.brains.segmentation.SimilarityIndex"
          ],
          "name": "semtools.brains.segmentation",
          "submodules": [],
          "type": null
        },
        "semtools.brains.utilities": {
          "interfaces": [
            "semtools.brains.utilities.HistogramMatchingFilter"
          ],
          "name": "semtools.brains.utilities",
          "submodules": [],
          "type": null
        },
        "semtools.converters": {
          "interfaces": [
            "semtools.converters.DWICompare",
            "semtools.converters.DWISimpleCompare"
          ],
          "name": "semtools.converters",
          "submodules": [],
          "type": null
        },
        "semtools.diffusion": {
          "interfaces": [],
          "name": "semtools.diffusion",
          "submodules": [
            "semtools.diffusion.tractography",
            "semtools.diffusion.gtract",
            "semtools.diffusion.maxcurvature",
            "semtools.diffusion.diffusion"
          ],
          "type": null
        },
        "semtools.diffusion.diffusion": {
          "interfaces": [
            "semtools.diffusion.diffusion.DWIConvert",
            "semtools.diffusion.diffusion.dtiaverage",
            "semtools.diffusion.diffusion.dtiestim",
            "semtools.diffusion.diffusion.dtiprocess"
          ],
          "name": "semtools.diffusion.diffusion",
          "submodules": [],
          "type": null
        },
        "semtools.diffusion.gtract": {
          "interfaces": [
            "semtools.diffusion.gtract.compareTractInclusion",
            "semtools.diffusion.gtract.extractNrrdVectorIndex",
            "semtools.diffusion.gtract.gtractAnisotropyMap",
            "semtools.diffusion.gtract.gtractAverageBvalues",
            "semtools.diffusion.gtract.gtractClipAnisotropy",
            "semtools.diffusion.gtract.gtractCoRegAnatomy",
            "semtools.diffusion.gtract.gtractConcatDwi",
            "semtools.diffusion.gtract.gtractCopyImageOrientation",
            "semtools.diffusion.gtract.gtractCoregBvalues",
            "semtools.diffusion.gtract.gtractCostFastMarching",
            "semtools.diffusion.gtract.gtractCreateGuideFiber",
            "semtools.diffusion.gtract.gtractFastMarchingTracking",
            "semtools.diffusion.gtract.gtractFiberTracking",
            "semtools.diffusion.gtract.gtractImageConformity",
            "semtools.diffusion.gtract.gtractInvertBSplineTransform",
            "semtools.diffusion.gtract.gtractInvertDisplacementField",
            "semtools.diffusion.gtract.gtractInvertRigidTransform",
            "semtools.diffusion.gtract.gtractResampleAnisotropy",
            "semtools.diffusion.gtract.gtractResampleB0",
            "semtools.diffusion.gtract.gtractResampleCodeImage",
            "semtools.diffusion.gtract.gtractResampleDWIInPlace",
            "semtools.diffusion.gtract.gtractResampleFibers",
            "semtools.diffusion.gtract.gtractTensor",
            "semtools.diffusion.gtract.gtractTransformToDisplacementField"
          ],
          "name": "semtools.diffusion.gtract",
          "submodules": [],
          "type": null
        },
        "semtools.diffusion.maxcurvature": {
          "interfaces": [
            "semtools.diffusion.maxcurvature.maxcurvature"
          ],
          "name": "semtools.diffusion.maxcurvature",
          "submodules": [],
          "type": null
        },
        "semtools.diffusion.tractography": {
          "interfaces": [],
          "name": "semtools.diffusion.tractography",
          "submodules": [
            "semtools.diffusion.tractography.fiberprocess",
            "semtools.diffusion.tractography.commandlineonly",
            "semtools.diffusion.tractography.fibertrack",
            "semtools.diffusion.tractography.ukftractography"
          ],
          "type": null
        },
        "semtools.diffusion.tractography.commandlineonly": {
          "interfaces": [
            "semtools.diffusion.tractography.commandlineonly.fiberstats"
          ],
          "name": "semtools.diffusion.tractography.commandlineonly",
          "submodules": [],
          "type": null
        },
        "semtools.diffusion.tractography.fiberprocess": {
          "interfaces": [
            "semtools.diffusion.tractography.fiberprocess.fiberprocess"
          ],
          "name": "semtools.diffusion.tractography.fiberprocess",
          "submodules": [],
          "type": null
        },
        "semtools.diffusion.tractography.fibertrack": {
          "interfaces": [
            "semtools.diffusion.tractography.fibertrack.fibertrack"
          ],
          "name": "semtools.diffusion.tractography.fibertrack",
          "submodules": [],
          "type": null
        },
        "semtools.diffusion.tractography.ukftractography": {
          "interfaces": [
            "semtools.diffusion.tractography.ukftractography.UKFTractography"
          ],
          "name": "semtools.diffusion.tractography.ukftractography",
          "submodules": [],
          "type": null
        },
        "semtools.featurecreator": {
          "interfaces": [
            "semtools.featurecreator.GenerateCsfClippedFromClassifiedImage"
          ],
          "name": "semtools.featurecreator",
          "submodules": [],
          "type": null
        },
        "semtools.filtering": {
          "interfaces": [],
          "name": "semtools.filtering",
          "submodules": [
            "semtools.filtering.denoising",
            "semtools.filtering.featuredetection"
          ],
          "type": null
        },
        "semtools.filtering.denoising": {
          "interfaces": [
            "semtools.filtering.denoising.UnbiasedNonLocalMeans"
          ],
          "name": "semtools.filtering.denoising",
          "submodules": [],
          "type": null
        },
        "semtools.filtering.featuredetection": {
          "interfaces": [
            "semtools.filtering.featuredetection.CannyEdge",
            "semtools.filtering.featuredetection.CannySegmentationLevelSetImageFilter",
            "semtools.filtering.featuredetection.DilateImage",
            "semtools.filtering.featuredetection.DilateMask",
            "semtools.filtering.featuredetection.DistanceMaps",
            "semtools.filtering.featuredetection.DumpBinaryTrainingVectors",
            "semtools.filtering.featuredetection.ErodeImage",
            "semtools.filtering.featuredetection.FlippedDifference",
            "semtools.filtering.featuredetection.GenerateBrainClippedImage",
            "semtools.filtering.featuredetection.GenerateSummedGradientImage",
            "semtools.filtering.featuredetection.GenerateTestImage",
            "semtools.filtering.featuredetection.GradientAnisotropicDiffusionImageFilter",
            "semtools.filtering.featuredetection.HammerAttributeCreator",
            "semtools.filtering.featuredetection.NeighborhoodMean",
            "semtools.filtering.featuredetection.NeighborhoodMedian",
            "semtools.filtering.featuredetection.STAPLEAnalysis",
            "semtools.filtering.featuredetection.TextureFromNoiseImageFilter",
            "semtools.filtering.featuredetection.TextureMeasureFilter"
          ],
          "name": "semtools.filtering.featuredetection",
          "submodules": [],
          "type": null
        },
        "semtools.legacy": {
          "interfaces": [],
          "name": "semtools.legacy",
          "submodules": [
            "semtools.legacy.registration"
          ],
          "type": null
        },
        "semtools.legacy.registration": {
          "interfaces": [
            "semtools.legacy.registration.scalartransform"
          ],
          "name": "semtools.legacy.registration",
          "submodules": [],
          "type": null
        },
        "semtools.registration": {
          "interfaces": [],
          "name": "semtools.registration",
          "submodules": [
            "semtools.registration.brainsfit",
            "semtools.registration.brainsresample",
            "semtools.registration.brainsresize",
            "semtools.registration.specialized"
          ],
          "type": null
        },
        "semtools.registration.brainsfit": {
          "interfaces": [
            "semtools.registration.brainsfit.BRAINSFit"
          ],
          "name": "semtools.registration.brainsfit",
          "submodules": [],
          "type": null
        },
        "semtools.registration.brainsresample": {
          "interfaces": [
            "semtools.registration.brainsresample.BRAINSResample"
          ],
          "name": "semtools.registration.brainsresample",
          "submodules": [],
          "type": null
        },
        "semtools.registration.brainsresize": {
          "interfaces": [
            "semtools.registration.brainsresize.BRAINSResize"
          ],
          "name": "semtools.registration.brainsresize",
          "submodules": [],
          "type": null
        },
        "semtools.registration.specialized": {
          "interfaces": [
            "semtools.registration.specialized.BRAINSDemonWarp",
            "semtools.registration.specialized.BRAINSTransformFromFiducials",
            "semtools.registration.specialized.VBRAINSDemonWarp"
          ],
          "name": "semtools.registration.specialized",
          "submodules": [],
          "type": null
        },
        "semtools.segmentation": {
          "interfaces": [],
          "name": "semtools.segmentation",
          "submodules": [
            "semtools.segmentation.specialized"
          ],
          "type": null
        },
        "semtools.segmentation.specialized": {
          "interfaces": [
            "semtools.segmentation.specialized.BRAINSABC",
            "semtools.segmentation.specialized.BRAINSConstellationDetector",
            "semtools.segmentation.specialized.BRAINSCreateLabelMapFromProbabilityMaps",
            "semtools.segmentation.specialized.BRAINSCut",
            "semtools.segmentation.specialized.BRAINSMultiSTAPLE",
            "semtools.segmentation.specialized.BRAINSROIAuto",
            "semtools.segmentation.specialized.BinaryMaskEditorBasedOnLandmarks",
            "semtools.segmentation.specialized.ESLR"
          ],
          "name": "semtools.segmentation.specialized",
          "submodules": [],
          "type": null
        },
        "semtools.testing": {
          "interfaces": [],
          "name": "semtools.testing",
          "submodules": [
            "semtools.testing.landmarkscompare",
            "semtools.testing.featuredetection",
            "semtools.testing.generateaveragelmkfile"
          ],
          "type": null
        },
        "semtools.testing.featuredetection": {
          "interfaces": [
            "semtools.testing.featuredetection.SphericalCoordinateGeneration"
          ],
          "name": "semtools.testing.featuredetection",
          "submodules": [],
          "type": null
        },
        "semtools.testing.generateaveragelmkfile": {
          "interfaces": [
            "semtools.testing.generateaveragelmkfile.GenerateAverageLmkFile"
          ],
          "name": "semtools.testing.generateaveragelmkfile",
          "submodules": [],
          "type": null
        },
        "semtools.testing.landmarkscompare": {
          "interfaces": [
            "semtools.testing.landmarkscompare.LandmarksCompare"
          ],
          "name": "semtools.testing.landmarkscompare",
          "submodules": [],
          "type": null
        },
        "semtools.utilities": {
          "interfaces": [],
          "name": "semtools.utilities",
          "submodules": [
            "semtools.utilities.brains"
          ],
          "type": null
        },
        "semtools.utilities.brains": {
          "interfaces": [
            "semtools.utilities.brains.BRAINSAlignMSP",
            "semtools.utilities.brains.BRAINSClipInferior",
            "semtools.utilities.brains.BRAINSConstellationModeler",
            "semtools.utilities.brains.BRAINSEyeDetector",
            "semtools.utilities.brains.BRAINSInitializedControlPoints",
            "semtools.utilities.brains.BRAINSLandmarkInitializer",
            "semtools.utilities.brains.BRAINSLinearModelerEPCA",
            "semtools.utilities.brains.BRAINSLmkTransform",
            "semtools.utilities.brains.BRAINSMush",
            "semtools.utilities.brains.BRAINSSnapShotWriter",
            "semtools.utilities.brains.BRAINSTransformConvert",
            "semtools.utilities.brains.BRAINSTrimForegroundInDirection",
            "semtools.utilities.brains.CleanUpOverlapLabels",
            "semtools.utilities.brains.FindCenterOfBrain",
            "semtools.utilities.brains.GenerateLabelMapFromProbabilityMap",
            "semtools.utilities.brains.ImageRegionPlotter",
            "semtools.utilities.brains.JointHistogram",
            "semtools.utilities.brains.ShuffleVectorsModule",
            "semtools.utilities.brains.fcsv_to_hdf5",
            "semtools.utilities.brains.insertMidACPCpoint",
            "semtools.utilities.brains.landmarksConstellationAligner",
            "semtools.utilities.brains.landmarksConstellationWeights"
          ],
          "name": "semtools.utilities.brains",
          "submodules": [],
          "type": null
        },
        "slicer": {
          "interfaces": [],
          "name": "slicer",
          "submodules": [
            "slicer.registration",
            "slicer.filtering",
            "slicer.legacy",
            "slicer.segmentation",
            "slicer.diffusion",
            "slicer.converters",
            "slicer.utilities",
            "slicer.surface",
            "slicer.quantification"
          ],
          "type": null
        },
        "slicer.converters": {
          "interfaces": [
            "slicer.converters.DicomToNrrdConverter",
            "slicer.converters.OrientScalarVolume"
          ],
          "name": "slicer.converters",
          "submodules": [],
          "type": null
        },
        "slicer.diffusion": {
          "interfaces": [],
          "name": "slicer.diffusion",
          "submodules": [
            "slicer.diffusion.diffusion"
          ],
          "type": null
        },
        "slicer.diffusion.diffusion": {
          "interfaces": [
            "slicer.diffusion.diffusion.DTIexport",
            "slicer.diffusion.diffusion.DTIimport",
            "slicer.diffusion.diffusion.DWIJointRicianLMMSEFilter",
            "slicer.diffusion.diffusion.DWIRicianLMMSEFilter",
            "slicer.diffusion.diffusion.DWIToDTIEstimation",
            "slicer.diffusion.diffusion.DiffusionTensorScalarMeasurements",
            "slicer.diffusion.diffusion.DiffusionWeightedVolumeMasking",
            "slicer.diffusion.diffusion.ResampleDTIVolume",
            "slicer.diffusion.diffusion.TractographyLabelMapSeeding"
          ],
          "name": "slicer.diffusion.diffusion",
          "submodules": [],
          "type": null
        },
        "slicer.filtering": {
          "interfaces": [],
          "name": "slicer.filtering",
          "submodules": [
            "slicer.filtering.checkerboardfilter",
            "slicer.filtering.denoising",
            "slicer.filtering.extractskeleton",
            "slicer.filtering.morphology",
            "slicer.filtering.histogrammatching",
            "slicer.filtering.imagelabelcombine",
            "slicer.filtering.n4itkbiasfieldcorrection",
            "slicer.filtering.resamplescalarvectordwivolume",
            "slicer.filtering.thresholdscalarvolume",
            "slicer.filtering.votingbinaryholefillingimagefilter",
            "slicer.filtering.arithmetic"
          ],
          "type": null
        },
        "slicer.filtering.arithmetic": {
          "interfaces": [
            "slicer.filtering.arithmetic.AddScalarVolumes",
            "slicer.filtering.arithmetic.CastScalarVolume",
            "slicer.filtering.arithmetic.MaskScalarVolume",
            "slicer.filtering.arithmetic.MultiplyScalarVolumes",
            "slicer.filtering.arithmetic.SubtractScalarVolumes"
          ],
          "name": "slicer.filtering.arithmetic",
          "submodules": [],
          "type": null
        },
        "slicer.filtering.checkerboardfilter": {
          "interfaces": [
            "slicer.filtering.checkerboardfilter.CheckerBoardFilter"
          ],
          "name": "slicer.filtering.checkerboardfilter",
          "submodules": [],
          "type": null
        },
        "slicer.filtering.denoising": {
          "interfaces": [
            "slicer.filtering.denoising.CurvatureAnisotropicDiffusion",
            "slicer.filtering.denoising.GaussianBlurImageFilter",
            "slicer.filtering.denoising.GradientAnisotropicDiffusion",
            "slicer.filtering.denoising.MedianImageFilter"
          ],
          "name": "slicer.filtering.denoising",
          "submodules": [],
          "type": null
        },
        "slicer.filtering.extractskeleton": {
          "interfaces": [
            "slicer.filtering.extractskeleton.ExtractSkeleton"
          ],
          "name": "slicer.filtering.extractskeleton",
          "submodules": [],
          "type": null
        },
        "slicer.filtering.histogrammatching": {
          "interfaces": [
            "slicer.filtering.histogrammatching.HistogramMatching"
          ],
          "name": "slicer.filtering.histogrammatching",
          "submodules": [],
          "type": null
        },
        "slicer.filtering.imagelabelcombine": {
          "interfaces": [
            "slicer.filtering.imagelabelcombine.ImageLabelCombine"
          ],
          "name": "slicer.filtering.imagelabelcombine",
          "submodules": [],
          "type": null
        },
        "slicer.filtering.morphology": {
          "interfaces": [
            "slicer.filtering.morphology.GrayscaleFillHoleImageFilter",
            "slicer.filtering.morphology.GrayscaleGrindPeakImageFilter"
          ],
          "name": "slicer.filtering.morphology",
          "submodules": [],
          "type": null
        },
        "slicer.filtering.n4itkbiasfieldcorrection": {
          "interfaces": [
            "slicer.filtering.n4itkbiasfieldcorrection.N4ITKBiasFieldCorrection"
          ],
          "name": "slicer.filtering.n4itkbiasfieldcorrection",
          "submodules": [],
          "type": null
        },
        "slicer.filtering.resamplescalarvectordwivolume": {
          "interfaces": [
            "slicer.filtering.resamplescalarvectordwivolume.ResampleScalarVectorDWIVolume"
          ],
          "name": "slicer.filtering.resamplescalarvectordwivolume",
          "submodules": [],
          "type": null
        },
        "slicer.filtering.thresholdscalarvolume": {
          "interfaces": [
            "slicer.filtering.thresholdscalarvolume.ThresholdScalarVolume"
          ],
          "name": "slicer.filtering.thresholdscalarvolume",
          "submodules": [],
          "type": null
        },
        "slicer.filtering.votingbinaryholefillingimagefilter": {
          "interfaces": [
            "slicer.filtering.votingbinaryholefillingimagefilter.VotingBinaryHoleFillingImageFilter"
          ],
          "name": "slicer.filtering.votingbinaryholefillingimagefilter",
          "submodules": [],
          "type": null
        },
        "slicer.legacy": {
          "interfaces": [],
          "name": "slicer.legacy",
          "submodules": [
            "slicer.legacy.converters",
            "slicer.legacy.diffusion",
            "slicer.legacy.filtering",
            "slicer.legacy.segmentation",
            "slicer.legacy.registration"
          ],
          "type": null
        },
        "slicer.legacy.converters": {
          "interfaces": [
            "slicer.legacy.converters.BSplineToDeformationField"
          ],
          "name": "slicer.legacy.converters",
          "submodules": [],
          "type": null
        },
        "slicer.legacy.diffusion": {
          "interfaces": [],
          "name": "slicer.legacy.diffusion",
          "submodules": [
            "slicer.legacy.diffusion.denoising"
          ],
          "type": null
        },
        "slicer.legacy.diffusion.denoising": {
          "interfaces": [
            "slicer.legacy.diffusion.denoising.DWIUnbiasedNonLocalMeansFilter"
          ],
          "name": "slicer.legacy.diffusion.denoising",
          "submodules": [],
          "type": null
        },
        "slicer.legacy.filtering": {
          "interfaces": [
            "slicer.legacy.filtering.OtsuThresholdImageFilter",
            "slicer.legacy.filtering.ResampleScalarVolume"
          ],
          "name": "slicer.legacy.filtering",
          "submodules": [],
          "type": null
        },
        "slicer.legacy.registration": {
          "interfaces": [
            "slicer.legacy.registration.AffineRegistration",
            "slicer.legacy.registration.BSplineDeformableRegistration",
            "slicer.legacy.registration.ExpertAutomatedRegistration",
            "slicer.legacy.registration.LinearRegistration",
            "slicer.legacy.registration.MultiResolutionAffineRegistration",
            "slicer.legacy.registration.RigidRegistration"
          ],
          "name": "slicer.legacy.registration",
          "submodules": [],
          "type": null
        },
        "slicer.legacy.segmentation": {
          "interfaces": [
            "slicer.legacy.segmentation.OtsuThresholdSegmentation"
          ],
          "name": "slicer.legacy.segmentation",
          "submodules": [],
          "type": null
        },
        "slicer.quantification": {
          "interfaces": [],
          "name": "slicer.quantification",
          "submodules": [
            "slicer.quantification.petstandarduptakevaluecomputation",
            "slicer.quantification.changequantification"
          ],
          "type": null
        },
        "slicer.quantification.changequantification": {
          "interfaces": [
            "slicer.quantification.changequantification.IntensityDifferenceMetric"
          ],
          "name": "slicer.quantification.changequantification",
          "submodules": [],
          "type": null
        },
        "slicer.quantification.petstandarduptakevaluecomputation": {
          "interfaces": [
            "slicer.quantification.petstandarduptakevaluecomputation.PETStandardUptakeValueComputation"
          ],
          "name": "slicer.quantification.petstandarduptakevaluecomputation",
          "submodules": [],
          "type": null
        },
        "slicer.registration": {
          "interfaces": [],
          "name": "slicer.registration",
          "submodules": [
            "slicer.registration.brainsfit",
            "slicer.registration.brainsresample",
            "slicer.registration.specialized"
          ],
          "type": null
        },
        "slicer.registration.brainsfit": {
          "interfaces": [
            "slicer.registration.brainsfit.BRAINSFit"
          ],
          "name": "slicer.registration.brainsfit",
          "submodules": [],
          "type": null
        },
        "slicer.registration.brainsresample": {
          "interfaces": [
            "slicer.registration.brainsresample.BRAINSResample"
          ],
          "name": "slicer.registration.brainsresample",
          "submodules": [],
          "type": null
        },
        "slicer.registration.specialized": {
          "interfaces": [
            "slicer.registration.specialized.ACPCTransform",
            "slicer.registration.specialized.BRAINSDemonWarp",
            "slicer.registration.specialized.FiducialRegistration",
            "slicer.registration.specialized.VBRAINSDemonWarp"
          ],
          "name": "slicer.registration.specialized",
          "submodules": [],
          "type": null
        },
        "slicer.segmentation": {
          "interfaces": [],
          "name": "slicer.segmentation",
          "submodules": [
            "slicer.segmentation.simpleregiongrowingsegmentation",
            "slicer.segmentation.specialized"
          ],
          "type": null
        },
        "slicer.segmentation.simpleregiongrowingsegmentation": {
          "interfaces": [
            "slicer.segmentation.simpleregiongrowingsegmentation.SimpleRegionGrowingSegmentation"
          ],
          "name": "slicer.segmentation.simpleregiongrowingsegmentation",
          "submodules": [],
          "type": null
        },
        "slicer.segmentation.specialized": {
          "interfaces": [
            "slicer.segmentation.specialized.BRAINSROIAuto",
            "slicer.segmentation.specialized.EMSegmentCommandLine",
            "slicer.segmentation.specialized.RobustStatisticsSegmenter"
          ],
          "name": "slicer.segmentation.specialized",
          "submodules": [],
          "type": null
        },
        "slicer.surface": {
          "interfaces": [
            "slicer.surface.GrayscaleModelMaker",
            "slicer.surface.LabelMapSmoothing",
            "slicer.surface.MergeModels",
            "slicer.surface.ModelMaker",
            "slicer.surface.ModelToLabelMap",
            "slicer.surface.ProbeVolumeWithModel"
          ],
          "name": "slicer.surface",
          "submodules": [],
          "type": null
        },
        "slicer.utilities": {
          "interfaces": [
            "slicer.utilities.EMSegmentTransformToNewFormat"
          ],
          "name": "slicer.utilities",
          "submodules": [],
          "type": null
        },
        "spm": {
          "interfaces": [],
          "name": "spm",
          "submodules": [
            "spm.utils",
            "spm.base",
            "spm.preprocess",
            "spm.model"
          ],
          "type": null
        },
        "spm.base": {
          "interfaces": [
            "spm.base.SPMCommand"
          ],
          "name": "spm.base",
          "submodules": [],
          "type": null
        },
        "spm.model": {
          "interfaces": [
            "spm.model.EstimateContrast",
            "spm.model.EstimateModel",
            "spm.model.FactorialDesign",
            "spm.model.Level1Design",
            "spm.model.MultipleRegressionDesign",
            "spm.model.OneSampleTTestDesign",
            "spm.model.PairedTTestDesign",
            "spm.model.Threshold",
            "spm.model.ThresholdStatistics",
            "spm.model.TwoSampleTTestDesign"
          ],
          "name": "spm.model",
          "submodules": [],
          "type": null
        },
        "spm.preprocess": {
          "interfaces": [
            "spm.preprocess.ApplyDeformations",
            "spm.preprocess.Coregister",
            "spm.preprocess.CreateWarped",
            "spm.preprocess.DARTEL",
            "spm.preprocess.DARTELNorm2MNI",
            "spm.preprocess.NewSegment",
            "spm.preprocess.Normalize",
            "spm.preprocess.Normalize12",
            "spm.preprocess.Realign",
            "spm.preprocess.Segment",
            "spm.preprocess.SliceTiming",
            "spm.preprocess.Smooth",
            "spm.preprocess.VBMSegment"
          ],
          "name": "spm.preprocess",
          "submodules": [],
          "type": null
        },
        "spm.utils": {
          "interfaces": [
            "spm.utils.Analyze2nii",
            "spm.utils.ApplyInverseDeformation",
            "spm.utils.ApplyTransform",
            "spm.utils.CalcCoregAffine",
            "spm.utils.DicomImport",
            "spm.utils.Reslice",
            "spm.utils.ResliceToReference"
          ],
          "name": "spm.utils",
          "submodules": [],
          "type": null
        },
        "utility": {
          "interfaces": [
            "utility.AssertEqual",
            "utility.CSVReader",
            "utility.Function",
            "utility.IdentityInterface",
            "utility.Merge",
            "utility.Rename",
            "utility.Select",
            "utility.Split"
          ],
          "name": "utility",
          "submodules": [],
          "type": null
        },
        "vista": {
          "interfaces": [],
          "name": "vista",
          "submodules": [
            "vista.vista"
          ],
          "type": null
        },
        "vista.vista": {
          "interfaces": [
            "vista.vista.Vnifti2Image",
            "vista.vista.VtoMat"
          ],
          "name": "vista.vista",
          "submodules": [],
          "type": null
        }
      }
    };

    //object whose properties are interface categories and keys are objects {interface:name} under that category
    var organizedInterfaces = {
      'slicer': [{'slicer.filtering.histogrammatching.HistogramMatching': 'HistogramMatching'}, {'slicer.surface.ModelToLabelMap': 'ModelToLabelMap'}, {'slicer.diffusion.diffusion.DTIimport': 'DTIimport'}, {'slicer.diffusion.diffusion.DWIRicianLMMSEFilter': 'DWIRicianLMMSEFilter'}, {'slicer.diffusion.diffusion.ResampleDTIVolume': 'ResampleDTIVolume'}, {'slicer.filtering.imagelabelcombine.ImageLabelCombine': 'ImageLabelCombine'}, {'slicer.filtering.denoising.GaussianBlurImageFilter': 'GaussianBlurImageFilter'}, {'slicer.segmentation.specialized.BRAINSROIAuto': 'BRAINSROIAuto'}, {'slicer.legacy.segmentation.OtsuThresholdSegmentation': 'OtsuThresholdSegmentation'}, {'slicer.filtering.checkerboardfilter.CheckerBoardFilter': 'CheckerBoardFilter'}, {'slicer.filtering.arithmetic.MaskScalarVolume': 'MaskScalarVolume'}, {'slicer.legacy.filtering.OtsuThresholdImageFilter': 'OtsuThresholdImageFilter'}, {'slicer.registration.specialized.ACPCTransform': 'ACPCTransform'}, {'slicer.legacy.registration.ExpertAutomatedRegistration': 'ExpertAutomatedRegistration'}, {'slicer.registration.specialized.BRAINSDemonWarp': 'BRAINSDemonWarp'}, {'slicer.filtering.resamplescalarvectordwivolume.ResampleScalarVectorDWIVolume': 'ResampleScalarVectorDWIVolume'}, {'slicer.legacy.converters.BSplineToDeformationField': 'BSplineToDeformationField'}, {'slicer.legacy.filtering.ResampleScalarVolume': 'ResampleScalarVolume'}, {'slicer.filtering.extractskeleton.ExtractSkeleton': 'ExtractSkeleton'}, {'slicer.diffusion.diffusion.DiffusionWeightedVolumeMasking': 'DiffusionWeightedVolumeMasking'}, {'slicer.registration.brainsresample.BRAINSResample': 'BRAINSResample'}, {'slicer.legacy.registration.AffineRegistration': 'AffineRegistration'}, {'slicer.surface.MergeModels': 'MergeModels'}, {'slicer.segmentation.specialized.RobustStatisticsSegmenter': 'RobustStatisticsSegmenter'}, {'slicer.surface.ModelMaker': 'ModelMaker'}, {'slicer.filtering.denoising.MedianImageFilter': 'MedianImageFilter'}, {'slicer.surface.ProbeVolumeWithModel': 'ProbeVolumeWithModel'}, {'slicer.filtering.votingbinaryholefillingimagefilter.VotingBinaryHoleFillingImageFilter': 'VotingBinaryHoleFillingImageFilter'}, {'slicer.filtering.arithmetic.CastScalarVolume': 'CastScalarVolume'}, {'slicer.filtering.n4itkbiasfieldcorrection.N4ITKBiasFieldCorrection': 'N4ITKBiasFieldCorrection'}, {'slicer.surface.LabelMapSmoothing': 'LabelMapSmoothing'}, {'slicer.filtering.denoising.GradientAnisotropicDiffusion': 'GradientAnisotropicDiffusion'}, {'slicer.legacy.registration.LinearRegistration': 'LinearRegistration'}, {'slicer.converters.OrientScalarVolume': 'OrientScalarVolume'}, {'slicer.filtering.denoising.CurvatureAnisotropicDiffusion': 'CurvatureAnisotropicDiffusion'}, {'slicer.legacy.registration.MultiResolutionAffineRegistration': 'MultiResolutionAffineRegistration'}, {'slicer.filtering.thresholdscalarvolume.ThresholdScalarVolume': 'ThresholdScalarVolume'}, {'slicer.filtering.arithmetic.AddScalarVolumes': 'AddScalarVolumes'}, {'slicer.segmentation.simpleregiongrowingsegmentation.SimpleRegionGrowingSegmentation': 'SimpleRegionGrowingSegmentation'}, {'slicer.legacy.diffusion.denoising.DWIUnbiasedNonLocalMeansFilter': 'DWIUnbiasedNonLocalMeansFilter'}, {'slicer.utilities.EMSegmentTransformToNewFormat': 'EMSegmentTransformToNewFormat'}, {'slicer.converters.DicomToNrrdConverter': 'DicomToNrrdConverter'}, {'slicer.filtering.arithmetic.MultiplyScalarVolumes': 'MultiplyScalarVolumes'}, {'slicer.filtering.morphology.GrayscaleFillHoleImageFilter': 'GrayscaleFillHoleImageFilter'}, {'slicer.diffusion.diffusion.DTIexport': 'DTIexport'}, {'slicer.diffusion.diffusion.DiffusionTensorScalarMeasurements': 'DiffusionTensorScalarMeasurements'}, {'slicer.registration.specialized.VBRAINSDemonWarp': 'VBRAINSDemonWarp'}, {'slicer.diffusion.diffusion.TractographyLabelMapSeeding': 'TractographyLabelMapSeeding'}, {'slicer.diffusion.diffusion.DWIJointRicianLMMSEFilter': 'DWIJointRicianLMMSEFilter'}, {'slicer.quantification.changequantification.IntensityDifferenceMetric': 'IntensityDifferenceMetric'}, {'slicer.filtering.arithmetic.SubtractScalarVolumes': 'SubtractScalarVolumes'}, {'slicer.legacy.registration.BSplineDeformableRegistration': 'BSplineDeformableRegistration'}, {'slicer.legacy.registration.RigidRegistration': 'RigidRegistration'}, {'slicer.filtering.morphology.GrayscaleGrindPeakImageFilter': 'GrayscaleGrindPeakImageFilter'}, {'slicer.segmentation.specialized.EMSegmentCommandLine': 'EMSegmentCommandLine'}, {'slicer.surface.GrayscaleModelMaker': 'GrayscaleModelMaker'}, {'slicer.diffusion.diffusion.DWIToDTIEstimation': 'DWIToDTIEstimation'}, {'slicer.registration.brainsfit.BRAINSFit': 'BRAINSFit'}, {'slicer.quantification.petstandarduptakevaluecomputation.PETStandardUptakeValueComputation': 'PETStandardUptakeValueComputation'}, {'slicer.registration.specialized.FiducialRegistration': 'FiducialRegistration'}],
      'cmtk': [{'cmtk.nx.NetworkXMetrics': 'NetworkXMetrics'}, {'cmtk.parcellation.Parcellate': 'Parcellate'}, {'cmtk.nbs.NetworkBasedStatistic': 'NetworkBasedStatistic'}, {'cmtk.convert.CFFConverter': 'CFFConverter'}, {'cmtk.cmtk.ROIGen': 'ROIGen'}, {'cmtk.nx.AverageNetworks': 'AverageNetworks'}, {'cmtk.convert.MergeCNetworks': 'MergeCNetworks'}, {'cmtk.cmtk.CreateMatrix': 'CreateMatrix'}, {'cmtk.cmtk.CreateNodes': 'CreateNodes'}],
      'freesurfer': [{'freesurfer.model.Binarize': 'Binarize'}, {'freesurfer.utils.MRITessellate': 'MRITessellate'}, {'freesurfer.preprocess.Resample': 'Resample'}, {'freesurfer.utils.MRIMarchingCubes': 'MRIMarchingCubes'}, {'freesurfer.utils.MRIsConvert': 'MRIsConvert'}, {'freesurfer.model.Label2Vol': 'Label2Vol'}, {'freesurfer.preprocess.ParseDICOMDir': 'ParseDICOMDir'}, {'freesurfer.model.MRISPreproc': 'MRISPreproc'}, {'freesurfer.preprocess.BBRegister': 'BBRegister'}, {'freesurfer.model.Concatenate': 'Concatenate'}, {'freesurfer.utils.ApplyMask': 'ApplyMask'}, {'freesurfer.model.GLMFit': 'GLMFit'}, {'freesurfer.preprocess.DICOMConvert': 'DICOMConvert'}, {'freesurfer.preprocess.ReconAll': 'ReconAll'}, {'freesurfer.utils.Tkregister2': 'Tkregister2'}, {'freesurfer.utils.SampleToSurface': 'SampleToSurface'}, {'freesurfer.preprocess.RobustRegister': 'RobustRegister'}, {'freesurfer.utils.Surface2VolTransform': 'Surface2VolTransform'}, {'freesurfer.preprocess.MRIConvert': 'MRIConvert'}, {'freesurfer.utils.SurfaceSmooth': 'SurfaceSmooth'}, {'freesurfer.base.FSCommand': 'FSCommand'}, {'freesurfer.preprocess.Smooth': 'Smooth'}, {'freesurfer.utils.SmoothTessellation': 'SmoothTessellation'}, {'freesurfer.preprocess.SynthesizeFLASH': 'SynthesizeFLASH'}, {'freesurfer.model.SegStats': 'SegStats'}, {'freesurfer.utils.SurfaceSnapshots': 'SurfaceSnapshots'}, {'freesurfer.model.OneSampleTTest': 'OneSampleTTest'}, {'freesurfer.utils.MRIPretess': 'MRIPretess'}, {'freesurfer.preprocess.ApplyVolTransform': 'ApplyVolTransform'}, {'freesurfer.utils.SurfaceTransform': 'SurfaceTransform'}, {'freesurfer.utils.ImageInfo': 'ImageInfo'}, {'freesurfer.preprocess.FitMSParams': 'FitMSParams'}, {'freesurfer.utils.MakeAverageSubject': 'MakeAverageSubject'}, {'freesurfer.preprocess.UnpackSDICOMDir': 'UnpackSDICOMDir'}, {'freesurfer.model.MS_LDA': 'MS_LDA'}, {'freesurfer.utils.ExtractMainComponent': 'ExtractMainComponent'}],
      'semtools': [{'semtools.diffusion.gtract.gtractAverageBvalues': 'gtractAverageBvalues'}, {'semtools.utilities.brains.BRAINSLinearModelerEPCA': 'BRAINSLinearModelerEPCA'}, {'semtools.registration.specialized.VBRAINSDemonWarp': 'VBRAINSDemonWarp'}, {'semtools.diffusion.gtract.gtractTransformToDisplacementField': 'gtractTransformToDisplacementField'}, {'semtools.filtering.featuredetection.TextureMeasureFilter': 'TextureMeasureFilter'}, {'semtools.registration.brainsfit.BRAINSFit': 'BRAINSFit'}, {'semtools.featurecreator.GenerateCsfClippedFromClassifiedImage': 'GenerateCsfClippedFromClassifiedImage'}, {'semtools.filtering.featuredetection.DilateMask': 'DilateMask'}, {'semtools.diffusion.gtract.gtractInvertDisplacementField': 'gtractInvertDisplacementField'}, {'semtools.diffusion.diffusion.DWIConvert': 'DWIConvert'}, {'semtools.filtering.featuredetection.STAPLEAnalysis': 'STAPLEAnalysis'}, {'semtools.utilities.brains.BRAINSSnapShotWriter': 'BRAINSSnapShotWriter'}, {'semtools.utilities.brains.BRAINSLandmarkInitializer': 'BRAINSLandmarkInitializer'}, {'semtools.diffusion.gtract.gtractTensor': 'gtractTensor'}, {'semtools.diffusion.gtract.compareTractInclusion': 'compareTractInclusion'}, {'semtools.filtering.featuredetection.ErodeImage': 'ErodeImage'}, {'semtools.utilities.brains.BRAINSClipInferior': 'BRAINSClipInferior'}, {'semtools.utilities.brains.landmarksConstellationAligner': 'landmarksConstellationAligner'}, {'semtools.diffusion.gtract.gtractResampleCodeImage': 'gtractResampleCodeImage'}, {'semtools.diffusion.tractography.commandlineonly.fiberstats': 'fiberstats'}, {'semtools.converters.DWISimpleCompare': 'DWISimpleCompare'}, {'semtools.diffusion.gtract.gtractCoRegAnatomy': 'gtractCoRegAnatomy'}, {'semtools.utilities.brains.BRAINSTransformConvert': 'BRAINSTransformConvert'}, {'semtools.brains.segmentation.BRAINSTalairach': 'BRAINSTalairach'}, {'semtools.testing.generateaveragelmkfile.GenerateAverageLmkFile': 'GenerateAverageLmkFile'}, {'semtools.filtering.featuredetection.CannyEdge': 'CannyEdge'}, {'semtools.utilities.brains.GenerateLabelMapFromProbabilityMap': 'GenerateLabelMapFromProbabilityMap'}, {'semtools.diffusion.gtract.extractNrrdVectorIndex': 'extractNrrdVectorIndex'}, {'semtools.utilities.brains.BRAINSConstellationModeler': 'BRAINSConstellationModeler'}, {'semtools.utilities.brains.BRAINSEyeDetector': 'BRAINSEyeDetector'}, {'semtools.diffusion.gtract.gtractFastMarchingTracking': 'gtractFastMarchingTracking'}, {'semtools.diffusion.gtract.gtractCoregBvalues': 'gtractCoregBvalues'}, {'semtools.utilities.brains.BRAINSMush': 'BRAINSMush'}, {'semtools.testing.featuredetection.SphericalCoordinateGeneration': 'SphericalCoordinateGeneration'}, {'semtools.brains.utilities.HistogramMatchingFilter': 'HistogramMatchingFilter'}, {'semtools.diffusion.tractography.fiberprocess.fiberprocess': 'fiberprocess'}, {'semtools.brains.classify.BRAINSPosteriorToContinuousClass': 'BRAINSPosteriorToContinuousClass'}, {'semtools.utilities.brains.ImageRegionPlotter': 'ImageRegionPlotter'}, {'semtools.diffusion.gtract.gtractCostFastMarching': 'gtractCostFastMarching'}, {'semtools.filtering.denoising.UnbiasedNonLocalMeans': 'UnbiasedNonLocalMeans'}, {'semtools.segmentation.specialized.BRAINSABC': 'BRAINSABC'}, {'semtools.brains.segmentation.SimilarityIndex': 'SimilarityIndex'}, {'semtools.diffusion.tractography.ukftractography.UKFTractography': 'UKFTractography'}, {'semtools.filtering.featuredetection.GradientAnisotropicDiffusionImageFilter': 'GradientAnisotropicDiffusionImageFilter'}, {'semtools.diffusion.diffusion.dtiprocess': 'dtiprocess'}, {'semtools.filtering.featuredetection.GenerateSummedGradientImage': 'GenerateSummedGradientImage'}, {'semtools.registration.specialized.BRAINSDemonWarp': 'BRAINSDemonWarp'}, {'semtools.utilities.brains.insertMidACPCpoint': 'insertMidACPCpoint'}, {'semtools.registration.brainsresample.BRAINSResample': 'BRAINSResample'}, {'semtools.diffusion.gtract.gtractResampleFibers': 'gtractResampleFibers'}, {'semtools.diffusion.gtract.gtractResampleB0': 'gtractResampleB0'}, {'semtools.filtering.featuredetection.DumpBinaryTrainingVectors': 'DumpBinaryTrainingVectors'}, {'semtools.diffusion.gtract.gtractResampleDWIInPlace': 'gtractResampleDWIInPlace'}, {'semtools.diffusion.gtract.gtractInvertBSplineTransform': 'gtractInvertBSplineTransform'}, {'semtools.filtering.featuredetection.CannySegmentationLevelSetImageFilter': 'CannySegmentationLevelSetImageFilter'}, {'semtools.filtering.featuredetection.FlippedDifference': 'FlippedDifference'}, {'semtools.diffusion.gtract.gtractResampleAnisotropy': 'gtractResampleAnisotropy'}, {'semtools.utilities.brains.landmarksConstellationWeights': 'landmarksConstellationWeights'}, {'semtools.diffusion.diffusion.dtiaverage': 'dtiaverage'}, {'semtools.diffusion.gtract.gtractClipAnisotropy': 'gtractClipAnisotropy'}, {'semtools.legacy.registration.scalartransform': 'scalartransform'}, {'semtools.diffusion.gtract.gtractCreateGuideFiber': 'gtractCreateGuideFiber'}, {'semtools.segmentation.specialized.BRAINSMultiSTAPLE': 'BRAINSMultiSTAPLE'}, {'semtools.utilities.brains.JointHistogram': 'JointHistogram'}, {'semtools.utilities.brains.CleanUpOverlapLabels': 'CleanUpOverlapLabels'}, {'semtools.utilities.brains.BRAINSLmkTransform': 'BRAINSLmkTransform'}, {'semtools.utilities.brains.BRAINSAlignMSP': 'BRAINSAlignMSP'}, {'semtools.filtering.featuredetection.DilateImage': 'DilateImage'}, {'semtools.segmentation.specialized.BRAINSROIAuto': 'BRAINSROIAuto'}, {'semtools.segmentation.specialized.BinaryMaskEditorBasedOnLandmarks': 'BinaryMaskEditorBasedOnLandmarks'}, {'semtools.utilities.brains.BRAINSTrimForegroundInDirection': 'BRAINSTrimForegroundInDirection'}, {'semtools.utilities.brains.fcsv_to_hdf5': 'fcsv_to_hdf5'}, {'semtools.diffusion.gtract.gtractAnisotropyMap': 'gtractAnisotropyMap'}, {'semtools.utilities.brains.ShuffleVectorsModule': 'ShuffleVectorsModule'}, {'semtools.registration.specialized.BRAINSTransformFromFiducials': 'BRAINSTransformFromFiducials'}, {'semtools.filtering.featuredetection.NeighborhoodMean': 'NeighborhoodMean'}, {'semtools.filtering.featuredetection.GenerateBrainClippedImage': 'GenerateBrainClippedImage'}, {'semtools.segmentation.specialized.BRAINSCut': 'BRAINSCut'}, {'semtools.diffusion.tractography.fibertrack.fibertrack': 'fibertrack'}, {'semtools.segmentation.specialized.BRAINSCreateLabelMapFromProbabilityMaps': 'BRAINSCreateLabelMapFromProbabilityMaps'}, {'semtools.filtering.featuredetection.TextureFromNoiseImageFilter': 'TextureFromNoiseImageFilter'}, {'semtools.diffusion.diffusion.dtiestim': 'dtiestim'}, {'semtools.filtering.featuredetection.NeighborhoodMedian': 'NeighborhoodMedian'}, {'semtools.converters.DWICompare': 'DWICompare'}, {'semtools.registration.brainsresize.BRAINSResize': 'BRAINSResize'}, {'semtools.diffusion.gtract.gtractConcatDwi': 'gtractConcatDwi'}, {'semtools.diffusion.gtract.gtractInvertRigidTransform': 'gtractInvertRigidTransform'}, {'semtools.filtering.featuredetection.DistanceMaps': 'DistanceMaps'}, {'semtools.diffusion.gtract.gtractCopyImageOrientation': 'gtractCopyImageOrientation'}, {'semtools.diffusion.gtract.gtractFiberTracking': 'gtractFiberTracking'}, {'semtools.brains.segmentation.BRAINSTalairachMask': 'BRAINSTalairachMask'}, {'semtools.filtering.featuredetection.HammerAttributeCreator': 'HammerAttributeCreator'}, {'semtools.utilities.brains.FindCenterOfBrain': 'FindCenterOfBrain'}, {'semtools.diffusion.gtract.gtractImageConformity': 'gtractImageConformity'}, {'semtools.diffusion.maxcurvature.maxcurvature': 'maxcurvature'}, {'semtools.segmentation.specialized.BRAINSConstellationDetector': 'BRAINSConstellationDetector'}, {'semtools.testing.landmarkscompare.LandmarksCompare': 'LandmarksCompare'}, {'semtools.utilities.brains.BRAINSInitializedControlPoints': 'BRAINSInitializedControlPoints'}, {'semtools.segmentation.specialized.ESLR': 'ESLR'}, {'semtools.filtering.featuredetection.GenerateTestImage': 'GenerateTestImage'}],
      'diffusion_toolkit': [{'diffusion_toolkit.odf.ODFRecon': 'ODFRecon'}, {'diffusion_toolkit.dti.DTITracker': 'DTITracker'}, {'diffusion_toolkit.odf.HARDIMat': 'HARDIMat'}, {'diffusion_toolkit.odf.ODFTracker': 'ODFTracker'}, {'diffusion_toolkit.postproc.TrackMerge': 'TrackMerge'}, {'diffusion_toolkit.postproc.SplineFilter': 'SplineFilter'}, {'diffusion_toolkit.dti.DTIRecon': 'DTIRecon'}],
      'spm': [{'spm.preprocess.DARTEL': 'DARTEL'}, {'spm.preprocess.Normalize': 'Normalize'}, {'spm.model.Level1Design': 'Level1Design'}, {'spm.preprocess.CreateWarped': 'CreateWarped'}, {'spm.utils.ApplyTransform': 'ApplyTransform'}, {'spm.preprocess.Realign': 'Realign'}, {'spm.preprocess.VBMSegment': 'VBMSegment'}, {'spm.preprocess.DARTELNorm2MNI': 'DARTELNorm2MNI'}, {'spm.model.ThresholdStatistics': 'ThresholdStatistics'}, {'spm.model.FactorialDesign': 'FactorialDesign'}, {'spm.utils.CalcCoregAffine': 'CalcCoregAffine'}, {'spm.preprocess.Coregister': 'Coregister'}, {'spm.model.MultipleRegressionDesign': 'MultipleRegressionDesign'}, {'spm.base.SPMCommand': 'SPMCommand'}, {'spm.utils.ResliceToReference': 'ResliceToReference'}, {'spm.model.TwoSampleTTestDesign': 'TwoSampleTTestDesign'}, {'spm.model.EstimateModel': 'EstimateModel'}, {'spm.preprocess.NewSegment': 'NewSegment'}, {'spm.preprocess.Normalize12': 'Normalize12'}, {'spm.preprocess.SliceTiming': 'SliceTiming'}, {'spm.preprocess.Smooth': 'Smooth'}, {'spm.utils.ApplyInverseDeformation': 'ApplyInverseDeformation'}, {'spm.preprocess.ApplyDeformations': 'ApplyDeformations'}, {'spm.model.PairedTTestDesign': 'PairedTTestDesign'}, {'spm.preprocess.Segment': 'Segment'}, {'spm.utils.Analyze2nii': 'Analyze2nii'}, {'spm.model.EstimateContrast': 'EstimateContrast'}, {'spm.model.OneSampleTTestDesign': 'OneSampleTTestDesign'}, {'spm.model.Threshold': 'Threshold'}, {'spm.utils.DicomImport': 'DicomImport'}, {'spm.utils.Reslice': 'Reslice'}],
      'io': [{'io.XNATSink': 'XNATSink'}, {'io.XNATSource': 'XNATSource'}, {'io.JSONFileGrabber': 'JSONFileGrabber'}, {'io.DataFinder': 'DataFinder'}, {'io.FreeSurferSource': 'FreeSurferSource'}, {'io.SSHDataGrabber': 'SSHDataGrabber'}, {'io.JSONFileSink': 'JSONFileSink'}, {'io.SQLiteSink': 'SQLiteSink'}, {'io.SelectFiles': 'SelectFiles'}, {'io.IOBase': 'IOBase'}, {'io.DataGrabber': 'DataGrabber'}, {'io.DataSink': 'DataSink'}, {'io.MySQLSink': 'MySQLSink'}],
      'mne': [{'mne.base.WatershedBEM': 'WatershedBEM'}],
      'utility': [{'utility.Merge': 'Merge'}, {'utility.Select': 'Select'}, {'utility.Rename': 'Rename'}, {'utility.Split': 'Split'}, {'utility.AssertEqual': 'AssertEqual'}, {'utility.Function': 'Function'}, {'utility.CSVReader': 'CSVReader'}, {'utility.IdentityInterface': 'IdentityInterface'}],
      'vista': [{'vista.vista.VtoMat': 'VtoMat'}, {'vista.vista.Vnifti2Image': 'Vnifti2Image'}],
      'nitime': [{'nitime.analysis.CoherenceAnalyzer': 'CoherenceAnalyzer'}],
      'mrtrix': [{'mrtrix.tracking.Tracks2Prob': 'Tracks2Prob'}, {'mrtrix.tensors.FindShPeaks': 'FindShPeaks'}, {'mrtrix.tensors.GenerateDirections': 'GenerateDirections'}, {'mrtrix.tensors.Directions2Amplitude': 'Directions2Amplitude'}, {'mrtrix.tracking.FilterTracks': 'FilterTracks'}, {'mrtrix.preprocess.Tensor2Vector': 'Tensor2Vector'}, {'mrtrix.preprocess.MRTrixViewer': 'MRTrixViewer'}, {'mrtrix.preprocess.MRTransform': 'MRTransform'}, {'mrtrix.tracking.SphericallyDeconvolutedStreamlineTrack': 'SphericallyDeconvolutedStreamlineTrack'}, {'mrtrix.preprocess.Tensor2ApparentDiffusion': 'Tensor2ApparentDiffusion'}, {'mrtrix.preprocess.MRMultiply': 'MRMultiply'}, {'mrtrix.tracking.ProbabilisticSphericallyDeconvolutedStreamlineTrack': 'ProbabilisticSphericallyDeconvolutedStreamlineTrack'}, {'mrtrix.preprocess.MRConvert': 'MRConvert'}, {'mrtrix.preprocess.MRTrixInfo': 'MRTrixInfo'}, {'mrtrix.tracking.DiffusionTensorStreamlineTrack': 'DiffusionTensorStreamlineTrack'}, {'mrtrix.preprocess.MedianFilter3D': 'MedianFilter3D'}, {'mrtrix.preprocess.Tensor2FractionalAnisotropy': 'Tensor2FractionalAnisotropy'}, {'mrtrix.tensors.ConstrainedSphericalDeconvolution': 'ConstrainedSphericalDeconvolution'}, {'mrtrix.tensors.EstimateResponseForSH': 'EstimateResponseForSH'}, {'mrtrix.preprocess.Threshold': 'Threshold'}, {'mrtrix.preprocess.Erode': 'Erode'}, {'mrtrix.preprocess.GenerateWhiteMatterMask': 'GenerateWhiteMatterMask'}, {'mrtrix.tracking.StreamlineTrack': 'StreamlineTrack'}, {'mrtrix.convert.MRTrix2TrackVis': 'MRTrix2TrackVis'}, {'mrtrix.tensors.DWI2SphericalHarmonicsImage': 'DWI2SphericalHarmonicsImage'}, {'mrtrix.tensors.FSL2MRTrix': 'FSL2MRTrix'}, {'mrtrix.preprocess.DWI2Tensor': 'DWI2Tensor'}],
      'camino2trackvis': [{'camino2trackvis.convert.Trackvis2Camino': 'Trackvis2Camino'}, {'camino2trackvis.convert.Camino2Trackvis': 'Camino2Trackvis'}],
      'matlab': [{'matlab.MatlabCommand': 'MatlabCommand'}],
      'nipy': [{'nipy.preprocess.FmriRealign4d': 'FmriRealign4d'}, {'nipy.model.FitGLM': 'FitGLM'}, {'nipy.utils.Similarity': 'Similarity'}, {'nipy.preprocess.SpaceTimeRealigner': 'SpaceTimeRealigner'}, {'nipy.preprocess.Trim': 'Trim'}, {'nipy.preprocess.ComputeMask': 'ComputeMask'}, {'nipy.model.EstimateContrast': 'EstimateContrast'}],
      'elastix': [{'elastix.registration.PointsWarp': 'PointsWarp'}, {'elastix.registration.ApplyWarp': 'ApplyWarp'}, {'elastix.registration.AnalyzeWarp': 'AnalyzeWarp'}, {'elastix.registration.Registration': 'Registration'}, {'elastix.utils.EditTransform': 'EditTransform'}],
      'dipy': [{'dipy.tensors.DTI': 'DTI'}, {'dipy.tracks.TrackDensityMap': 'TrackDensityMap'}, {'dipy.tensors.TensorMode': 'TensorMode'}, {'dipy.preprocess.Denoise': 'Denoise'}, {'dipy.preprocess.Resample': 'Resample'}, {'dipy.simulate.SimulateMultiTensor': 'SimulateMultiTensor'}],
      'camino': [{'camino.calib.SFPICOCalibData': 'SFPICOCalibData'}, {'camino.convert.Image2Voxel': 'Image2Voxel'}, {'camino.dti.DTIFit': 'DTIFit'}, {'camino.convert.AnalyzeHeader': 'AnalyzeHeader'}, {'camino.odf.QBallMX': 'QBallMX'}, {'camino.dti.TrackBedpostxProba': 'TrackBedpostxProba'}, {'camino.dti.TrackBallStick': 'TrackBallStick'}, {'camino.convert.FSL2Scheme': 'FSL2Scheme'}, {'camino.dti.TrackBedpostxDeter': 'TrackBedpostxDeter'}, {'camino.dti.ComputeMeanDiffusivity': 'ComputeMeanDiffusivity'}, {'camino.dti.ModelFit': 'ModelFit'}, {'camino.calib.SFLUTGen': 'SFLUTGen'}, {'camino.odf.MESD': 'MESD'}, {'camino.dti.TrackBayesDirac': 'TrackBayesDirac'}, {'camino.odf.SFPeaks': 'SFPeaks'}, {'camino.dti.ComputeFractionalAnisotropy': 'ComputeFractionalAnisotropy'}, {'camino.odf.LinRecon': 'LinRecon'}, {'camino.dti.DTLUTGen': 'DTLUTGen'}, {'camino.dti.ComputeTensorTrace': 'ComputeTensorTrace'}, {'camino.utils.ImageStats': 'ImageStats'}, {'camino.convert.VtkStreamlines': 'VtkStreamlines'}, {'camino.convert.NIfTIDT2Camino': 'NIfTIDT2Camino'}, {'camino.dti.PicoPDFs': 'PicoPDFs'}, {'camino.dti.TrackDT': 'TrackDT'}, {'camino.dti.ComputeEigensystem': 'ComputeEigensystem'}, {'camino.connectivity.Conmat': 'Conmat'}, {'camino.dti.Track': 'Track'}, {'camino.convert.DT2NIfTI': 'DT2NIfTI'}, {'camino.convert.Shredder': 'Shredder'}, {'camino.dti.TrackBootstrap': 'TrackBootstrap'}, {'camino.convert.TractShredder': 'TractShredder'}, {'camino.convert.ProcStreamlines': 'ProcStreamlines'}, {'camino.dti.TrackPICo': 'TrackPICo'}, {'camino.dti.DTMetric': 'DTMetric'}],
      'afni': [{'afni.preprocess.Fim': 'Fim'}, {'afni.preprocess.SkullStrip': 'SkullStrip'}, {'afni.preprocess.Merge': 'Merge'}, {'afni.svm.SVMTrain': 'SVMTrain'}, {'afni.preprocess.ZCutUp': 'ZCutUp'}, {'afni.preprocess.TCorr1D': 'TCorr1D'}, {'afni.svm.SVMTest': 'SVMTest'}, {'afni.preprocess.Warp': 'Warp'}, {'afni.preprocess.Copy': 'Copy'}, {'afni.preprocess.Despike': 'Despike'}, {'afni.preprocess.TCorrMap': 'TCorrMap'}, {'afni.base.AFNICommand': 'AFNICommand'}, {'afni.preprocess.BlurInMask': 'BlurInMask'}, {'afni.preprocess.TCat': 'TCat'}, {'afni.preprocess.Refit': 'Refit'}, {'afni.preprocess.AutoTcorrelate': 'AutoTcorrelate'}, {'afni.preprocess.Detrend': 'Detrend'}, {'afni.preprocess.Autobox': 'Autobox'}, {'afni.preprocess.Retroicor': 'Retroicor'}, {'afni.preprocess.Fourier': 'Fourier'}, {'afni.preprocess.Maskave': 'Maskave'}, {'afni.preprocess.BrickStat': 'BrickStat'}, {'afni.preprocess.Resample': 'Resample'}, {'afni.preprocess.TStat': 'TStat'}, {'afni.preprocess.Automask': 'Automask'}, {'afni.preprocess.TShift': 'TShift'}, {'afni.preprocess.ROIStats': 'ROIStats'}, {'afni.preprocess.Bandpass': 'Bandpass'}, {'afni.preprocess.Eval': 'Eval'}, {'afni.preprocess.Calc': 'Calc'}, {'afni.preprocess.Means': 'Means'}, {'afni.preprocess.Allineate': 'Allineate'}, {'afni.preprocess.Volreg': 'Volreg'}, {'afni.preprocess.To3D': 'To3D'}, {'afni.preprocess.TCorrelate': 'TCorrelate'}, {'afni.preprocess.AFNItoNIFTI': 'AFNItoNIFTI'}],
      'base': [{'base.StdOutCommandLine': 'StdOutCommandLine'}, {'base.MpiCommandLine': 'MpiCommandLine'}, {'base.Interface': 'Interface'}, {'base.BaseInterface': 'BaseInterface'}, {'base.CommandLine': 'CommandLine'}, {'base.SEMLikeCommandLine': 'SEMLikeCommandLine'}],
      'ants': [{'ants.utils.AverageImages': 'AverageImages'}, {'ants.visualization.CreateTiledMosaic': 'CreateTiledMosaic'}, {'ants.resampling.WarpTimeSeriesImageMultiTransform': 'WarpTimeSeriesImageMultiTransform'}, {'ants.resampling.WarpImageMultiTransform': 'WarpImageMultiTransform'}, {'ants.utils.JacobianDeterminant': 'JacobianDeterminant'}, {'ants.segmentation.LaplacianThickness': 'LaplacianThickness'}, {'ants.resampling.ApplyTransforms': 'ApplyTransforms'}, {'ants.segmentation.N4BiasFieldCorrection': 'N4BiasFieldCorrection'}, {'ants.utils.MultiplyImages': 'MultiplyImages'}, {'ants.registration.ANTS': 'ANTS'}, {'ants.visualization.ConvertScalarImageToRGB': 'ConvertScalarImageToRGB'}, {'ants.registration.Registration': 'Registration'}, {'ants.utils.AverageAffineTransform': 'AverageAffineTransform'}, {'ants.segmentation.Atropos': 'Atropos'}, {'ants.base.ANTSCommand': 'ANTSCommand'}, {'ants.resampling.ApplyTransformsToPoints': 'ApplyTransformsToPoints'}, {'ants.segmentation.antsCorticalThickness': 'antsCorticalThickness'}, {'ants.segmentation.JointFusion': 'JointFusion'}],
      'mipav': [{'mipav.developer.MedicAlgorithmSPECTRE2010': 'MedicAlgorithmSPECTRE2010'}, {'mipav.developer.JistCortexSurfaceMeshInflation': 'JistCortexSurfaceMeshInflation'}, {'mipav.developer.JistBrainMp2rageDuraEstimation': 'JistBrainMp2rageDuraEstimation'}, {'mipav.developer.JistBrainPartialVolumeFilter': 'JistBrainPartialVolumeFilter'}, {'mipav.developer.JistBrainMgdmSegmentation': 'JistBrainMgdmSegmentation'}, {'mipav.developer.MedicAlgorithmLesionToads': 'MedicAlgorithmLesionToads'}, {'mipav.developer.JistLaminarProfileCalculator': 'JistLaminarProfileCalculator'}, {'mipav.developer.MedicAlgorithmImageCalculator': 'MedicAlgorithmImageCalculator'}, {'mipav.developer.JistLaminarProfileSampling': 'JistLaminarProfileSampling'}, {'mipav.developer.JistLaminarVolumetricLayering': 'JistLaminarVolumetricLayering'}, {'mipav.developer.JistBrainMp2rageSkullStripping': 'JistBrainMp2rageSkullStripping'}, {'mipav.developer.RandomVol': 'RandomVol'}, {'mipav.developer.MedicAlgorithmThresholdToBinaryMask': 'MedicAlgorithmThresholdToBinaryMask'}, {'mipav.developer.MedicAlgorithmN3': 'MedicAlgorithmN3'}, {'mipav.developer.JistIntensityMp2rageMasking': 'JistIntensityMp2rageMasking'}, {'mipav.developer.JistLaminarProfileGeometry': 'JistLaminarProfileGeometry'}, {'mipav.developer.MedicAlgorithmMipavReorient': 'MedicAlgorithmMipavReorient'}, {'mipav.developer.JistLaminarROIAveraging': 'JistLaminarROIAveraging'}],
      'fsl': [{'fsl.epi.EPIDeWarp': 'EPIDeWarp'}, {'fsl.utils.AvScale': 'AvScale'}, {'fsl.model.Level1Design': 'Level1Design'}, {'fsl.utils.ImageMaths': 'ImageMaths'}, {'fsl.epi.EpiReg': 'EpiReg'}, {'fsl.maths.DilateImage': 'DilateImage'}, {'fsl.model.FILMGLS': 'FILMGLS'}, {'fsl.utils.Merge': 'Merge'}, {'fsl.utils.ConvertXFM': 'ConvertXFM'}, {'fsl.preprocess.FIRST': 'FIRST'}, {'fsl.dti.ProjThresh': 'ProjThresh'}, {'fsl.dti.DistanceMap': 'DistanceMap'}, {'fsl.maths.SpatialFilter': 'SpatialFilter'}, {'fsl.utils.ConvertWarp': 'ConvertWarp'}, {'fsl.maths.MathsCommand': 'MathsCommand'}, {'fsl.dti.ProbTrackX2': 'ProbTrackX2'}, {'fsl.maths.ErodeImage': 'ErodeImage'}, {'fsl.model.MELODIC': 'MELODIC'}, {'fsl.utils.RobustFOV': 'RobustFOV'}, {'fsl.preprocess.ApplyXfm': 'ApplyXfm'}, {'fsl.dti.ProbTrackX': 'ProbTrackX'}, {'fsl.maths.Threshold': 'Threshold'}, {'fsl.base.FSLCommand': 'FSLCommand'}, {'fsl.utils.CopyGeom': 'CopyGeom'}, {'fsl.maths.MaxImage': 'MaxImage'}, {'fsl.maths.IsotropicSmooth': 'IsotropicSmooth'}, {'fsl.utils.Slicer': 'Slicer'}, {'fsl.maths.ApplyMask': 'ApplyMask'}, {'fsl.maths.MeanImage': 'MeanImage'}, {'fsl.utils.SwapDimensions': 'SwapDimensions'}, {'fsl.preprocess.FUGUE': 'FUGUE'}, {'fsl.epi.Eddy': 'Eddy'}, {'fsl.maths.ChangeDataType': 'ChangeDataType'}, {'fsl.model.MultipleRegressDesign': 'MultipleRegressDesign'}, {'fsl.model.SMM': 'SMM'}, {'fsl.utils.FilterRegressor': 'FilterRegressor'}, {'fsl.preprocess.FAST': 'FAST'}, {'fsl.epi.PrepareFieldmap': 'PrepareFieldmap'}, {'fsl.utils.ImageStats': 'ImageStats'}, {'fsl.preprocess.BET': 'BET'}, {'fsl.dti.VecReg': 'VecReg'}, {'fsl.model.FEATModel': 'FEATModel'}, {'fsl.maths.TemporalFilter': 'TemporalFilter'}, {'fsl.preprocess.FNIRT': 'FNIRT'}, {'fsl.preprocess.SUSAN': 'SUSAN'}, {'fsl.dti.XFibres': 'XFibres'}, {'fsl.dti.TractSkeleton': 'TractSkeleton'}, {'fsl.model.L2Model': 'L2Model'}, {'fsl.utils.ImageMeants': 'ImageMeants'}, {'fsl.model.Cluster': 'Cluster'}, {'fsl.utils.WarpPointsToStd': 'WarpPointsToStd'}, {'fsl.utils.Split': 'Split'}, {'fsl.maths.MultiImageMaths': 'MultiImageMaths'}, {'fsl.utils.WarpUtils': 'WarpUtils'}, {'fsl.dti.FSLXCommand': 'FSLXCommand'}, {'fsl.utils.MotionOutliers': 'MotionOutliers'}, {'fsl.epi.SigLoss': 'SigLoss'}, {'fsl.model.Randomise': 'Randomise'}, {'fsl.model.SmoothEstimate': 'SmoothEstimate'}, {'fsl.epi.ApplyTOPUP': 'ApplyTOPUP'}, {'fsl.utils.InvWarp': 'InvWarp'}, {'fsl.utils.Smooth': 'Smooth'}, {'fsl.model.ContrastMgr': 'ContrastMgr'}, {'fsl.dti.XFibres5': 'XFibres5'}, {'fsl.dti.XFibres4': 'XFibres4'}, {'fsl.maths.UnaryMaths': 'UnaryMaths'}, {'fsl.utils.ExtractROI': 'ExtractROI'}, {'fsl.utils.Reorient2Std': 'Reorient2Std'}, {'fsl.preprocess.FLIRT': 'FLIRT'}, {'fsl.utils.Overlay': 'Overlay'}, {'fsl.dti.BEDPOSTX': 'BEDPOSTX'}, {'fsl.model.GLM': 'GLM'}, {'fsl.preprocess.SliceTimer': 'SliceTimer'}, {'fsl.model.FEATRegister': 'FEATRegister'}, {'fsl.preprocess.PRELUDE': 'PRELUDE'}, {'fsl.dti.MakeDyadicVectors': 'MakeDyadicVectors'}, {'fsl.utils.SigLoss': 'SigLoss'}, {'fsl.model.FEAT': 'FEAT'}, {'fsl.dti.BEDPOSTX4': 'BEDPOSTX4'}, {'fsl.epi.EddyCorrect': 'EddyCorrect'}, {'fsl.preprocess.MCFLIRT': 'MCFLIRT'}, {'fsl.utils.PlotTimeSeries': 'PlotTimeSeries'}, {'fsl.preprocess.ApplyWarp': 'ApplyWarp'}, {'fsl.dti.FindTheBiggest': 'FindTheBiggest'}, {'fsl.utils.PlotMotionParams': 'PlotMotionParams'}, {'fsl.utils.WarpPoints': 'WarpPoints'}, {'fsl.dti.BEDPOSTX5': 'BEDPOSTX5'}, {'fsl.epi.TOPUP': 'TOPUP'}, {'fsl.dti.DTIFit': 'DTIFit'}, {'fsl.maths.BinaryMaths': 'BinaryMaths'}, {'fsl.model.FLAMEO': 'FLAMEO'}, {'fsl.utils.PowerSpectrum': 'PowerSpectrum'}, {'fsl.utils.Complex': 'Complex'}]
    };


    this.getNipypePackages = function () {
      return packages;
    };

    this.getOrganizedInterfaces = function () {
      return organizedInterfaces;
    }

  }
})
();
